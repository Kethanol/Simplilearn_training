using BusinessLogicTier.Contracts;
using Entities.Entities;
using Repository.Contracts;

namespace BusinessLogicTier.Concrete
{
    public class UserService : IUserService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IAuthorizationService _authorizationService;

        public UserService(IUnitOfWork unitOfWork, IAuthorizationService authorizationService)
        {
            _unitOfWork = unitOfWork;
            _authorizationService = authorizationService;
        }

        public async Task<string> SignIn(UserLogin loginInformation)
        {
            var existingUser = await _unitOfWork.UserRepository.GetSingleByAsync(u => (u.Username == loginInformation.UsernameOrEmail || u.E_mail == loginInformation.UsernameOrEmail)
            && loginInformation.Password == u.Password); // To encrypt the password

            // Validations placeholder

            if (existingUser != null)
            {
                var token = _authorizationService.GenerateToken(existingUser);
                return token;
            }

            return null!;
        }

        public async Task SignUp(User user)
        {
            // Validations + password management placeholder

            await _unitOfWork.UserRepository.InsertAsync(user);
            await _unitOfWork.SaveChangesAsync();
        }
    }
}
