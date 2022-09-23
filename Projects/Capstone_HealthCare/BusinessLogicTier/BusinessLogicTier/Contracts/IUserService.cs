using Entities.Entities;

namespace BusinessLogicTier.Contracts
{
    public interface IUserService
    {
        Task SignUp(User user);
        Task<string> SignIn(UserLogin loginInformation);
    }
}
