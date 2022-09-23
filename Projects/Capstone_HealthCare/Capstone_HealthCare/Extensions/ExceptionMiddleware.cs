using Microsoft.AspNetCore.Diagnostics;
using System.Text.Json;
using static System.Net.Mime.MediaTypeNames;

namespace Capstone_HealthCare.Extensions
{
    public static class ExceptionMiddleware
    {
        public class ExceptionDetails
        {
            public int StatusCode { get; set; }
            public string? Message { get; set; }

            public override string ToString()
            {
                return JsonSerializer.Serialize(this);
            }
        }

        public static void ConfigureExceptionHandler(this WebApplication app)
        {
            app.UseExceptionHandler(exceptionRunner =>
            {
                exceptionRunner.Run(async exceptionContext =>
                {
                    exceptionContext.Response.StatusCode = StatusCodes.Status500InternalServerError;

                    exceptionContext.Response.ContentType = Application.Json;

                    var contextFeature = exceptionContext.Features.Get<IExceptionHandlerFeature>();

                    if (contextFeature != null)
                    {
                        await exceptionContext.Response.WriteAsync(new ExceptionDetails()
                        {
                            StatusCode = exceptionContext.Response.StatusCode,
                            Message = $"Internal Server error: {contextFeature.Error}"

                        }.ToString());
                    }
                });
            });
        }
    }
}
