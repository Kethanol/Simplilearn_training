using BusinessLogicTier.Contracts;
using Entities.Entities;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace BusinessLogicTier.Concrete
{
    public class AuthorizationService : IAuthorizationService
    {
        private readonly IConfiguration _configuration;

        public AuthorizationService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public string GenerateToken(User? user)
        {
            var key = _configuration["JWT:Key"];

            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new List<Claim>()
            {
                new Claim(ClaimTypes.NameIdentifier, user.Username!),
                new Claim(ClaimTypes.Email, user.E_mail!),
                new Claim(ClaimTypes.GivenName, user.FirstName!),
                new Claim(ClaimTypes.Surname, user.LastName!),
                new Claim(ClaimTypes.Role, user.Role!)
            };

            var issuer = _configuration["JWT:Issuer"];
            var audience = _configuration["JWT:Audience"];

            var token = new JwtSecurityToken(issuer, audience, claims, null, expires: DateTime.Now.AddMinutes(15), credentials);
            var serializedToken = new JwtSecurityTokenHandler().WriteToken(token);

            return serializedToken;
        }
    }
}
