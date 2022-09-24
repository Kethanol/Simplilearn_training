using BusinessLogicTier.Models;
using Entities.Entities;

namespace BusinessLogicTier.Contracts
{
    public interface IUserService
    {
        Task<bool> SignUp(User user);
        Task<LoginResponseModel> SignIn(UserLogin loginInformation);
    }
}
