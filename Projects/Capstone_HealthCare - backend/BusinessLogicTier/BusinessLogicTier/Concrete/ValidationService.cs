using BusinessLogicTier.Contracts;
using System.Net.Mail;
using System.Security.Cryptography;
using System.Text;
using System.Text.RegularExpressions;

namespace BusinessLogicTier.Concrete
{
    public class ValidationService : IValidationService
    {
        public string Hash(string input)
        {
            using var myHash = SHA256.Create();
            var byteArrayResult = myHash.ComputeHash(Encoding.UTF8.GetBytes(input));

            return Convert.ToBase64String(byteArrayResult);

        }

        public bool ValidatePassword(string input)
        {
            if (string.IsNullOrEmpty(input)) return false;

            var regex = new Regex("^(?=.*[a - z])(?=.*[A - Z])(?=.*\\d)(?=.*[@$! % *? &])[A - Za - z\\d@$! % *? &]{ 8, }$");

            var isValid = regex.Match(input).Success;

            return isValid;
        }

        public bool ValidateUsernameOrMail(string input) => ValidateMail(input) || ValidateUsername(input);

        public bool ValidateUsername(string input)
        {
            if (string.IsNullOrEmpty(input)) return false;

            return input.Length >= 6 && input.Length <= 20;
        }

        public bool ValidateMail(string input)
        {
            if (string.IsNullOrEmpty(input)) return false;

            try
            {
                MailAddress mailAddress = new(input);
                return true;
            }
            catch (FormatException)
            {
                return false;
            }
        }
    }
}
