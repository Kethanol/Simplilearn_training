using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace Capstone_HealthCare.Extensions
{
    public static class AuthorizationConfiguration
    {
        public static void UseJWTConfiguration(this IServiceCollection services, IConfiguration config)
        {
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                    .AddJwtBearer(authOpts =>
                    {
                        authOpts.TokenValidationParameters = new TokenValidationParameters()
                        {
                            ValidateIssuer = true,
                            ValidateAudience = true,
                            ValidateLifetime = true,
                            ValidateIssuerSigningKey = true,
                            ValidIssuer = config.GetSection("JWT").GetValue<string>("Issuer"),
                            ValidAudience = config.GetSection("JWT").GetValue<string>("Audience"),
                            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config.GetSection("JWT").GetValue<string>("Key")))
                        };
                    });

        }
    }
}
