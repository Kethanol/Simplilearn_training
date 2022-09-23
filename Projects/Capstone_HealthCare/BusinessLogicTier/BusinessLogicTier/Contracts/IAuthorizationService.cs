using Entities.Entities;

namespace BusinessLogicTier.Contracts
{
    public interface IAuthorizationService
    {
        string GenerateToken(User? user);
    }
}
