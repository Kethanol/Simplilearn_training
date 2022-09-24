using BusinessLogicTier.Contracts;
using BusinessLogicTier.Models;
using Entities.Entities;
using Repository.Contracts;

namespace BusinessLogicTier.Concrete
{
    public class UserService : IUserService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IAuthorizationService _authorizationService;
        private readonly IValidationService _validationService;

        public UserService(IUnitOfWork unitOfWork, IAuthorizationService authorizationService, IValidationService validationService)
        {
            _unitOfWork = unitOfWork;
            _authorizationService = authorizationService;
            _validationService = validationService;
        }

        public async Task<LoginResponseModel> SignIn(UserLogin loginInformation)
        {
            var isValid = _validationService.ValidateUsernameOrMail(loginInformation.UsernameOrEmail!) && _validationService.ValidatePassword(loginInformation.Password!);
            var response = new LoginResponseModel();

            if (!isValid) return response;

            var hashedPassword = _validationService.Hash(loginInformation.Password!);

            var existingUser = await _unitOfWork.UserRepository.GetSingleByAsync(u => (u.Username == loginInformation.UsernameOrEmail || u.E_mail == loginInformation.UsernameOrEmail)
            && loginInformation.Password == hashedPassword);

            if (existingUser != null)
            {
                var token = _authorizationService.GenerateToken(existingUser);

                response.HasSuccess = true;
                response.Token = token;
            }

            return response;
        }

        public async Task<bool> SignUp(User user)
        {
            var isValid = _validationService.ValidateUsername(user.Username!) && _validationService.ValidatePassword(user.Password!) && _validationService.ValidateMail(user.E_mail!);

            if (!isValid) return isValid;

            var hashedPassword = _validationService.Hash(user.Password!);

            var newUser = new User()
            {
                Id = user.Id,
                Username = user.Username,
                FirstName = user.FirstName,
                LastName = user.LastName,
                E_mail = user.E_mail,
                Role = user.Role,
                Password = hashedPassword
            };

            await _unitOfWork.UserRepository.InsertAsync(newUser);
            await _unitOfWork.SaveChangesAsync();

            return true;
        }
    }
}
