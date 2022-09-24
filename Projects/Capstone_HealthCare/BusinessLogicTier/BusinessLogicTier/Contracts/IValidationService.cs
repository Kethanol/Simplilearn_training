namespace BusinessLogicTier.Contracts
{
    public interface IValidationService
    {
        string Hash(string input);
        bool ValidatePassword(string input);
        bool ValidateUsernameOrMail(string input);
        bool ValidateMail(string input);
        bool ValidateUsername(string input);
    }
}
