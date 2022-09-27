namespace Entities.Entities
{
    public class UserLogin
    {
        public string? UsernameOrEmail { get; set; }
        public string? Password { get; set; }
        public bool IsAdmin { get; set; }
    }
}
