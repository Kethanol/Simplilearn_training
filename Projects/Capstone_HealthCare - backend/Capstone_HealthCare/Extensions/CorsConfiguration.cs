using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace Capstone_HealthCare.Extensions
{
    public static class CorsConfiguration
    {
        public static void AddCustomCors(this IServiceCollection services)
        {
            services.AddCors(corsOptions =>
            {
                corsOptions.AddPolicy(name: "Capstone Frontend", corsBuilder =>
                {
                    corsBuilder.WithOrigins("http://localhost:3000").AllowAnyHeader().AllowAnyMethod();
                });
            });
        }
    }
}
