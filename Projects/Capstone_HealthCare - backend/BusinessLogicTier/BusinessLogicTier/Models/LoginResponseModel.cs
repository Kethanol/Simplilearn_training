namespace BusinessLogicTier.Models
{
    public class LoginResponseModel
    {
        public bool HasSuccess { get; set; }
        public string? ErrorReason { get; set; }
        public string? Token { get; set; }
        public bool IsAdmin { get; set; }
    }
}
