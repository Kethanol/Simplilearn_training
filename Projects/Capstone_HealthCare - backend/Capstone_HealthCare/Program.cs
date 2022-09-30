using BusinessLogicTier.Concrete;
using BusinessLogicTier.Contracts;
using Capstone_HealthCare.Extensions;
using Entities.Entities;
using Microsoft.EntityFrameworkCore;
using Repository;
using Repository.Concrete;
using Repository.Contracts;

static void ConfigureServices(WebApplicationBuilder builder)
{
    var services = builder.Services;

    services.AddControllers();

    services.AddRouting(opts =>
    {
        opts.LowercaseUrls = true;
    });

    services.AddCustomCors();
    services.UseJWTConfiguration(builder.Configuration);

    var connectionString = Environment.GetEnvironmentVariable("DB_HOST") != null ? $"Data Source={Environment.GetEnvironmentVariable("DB_HOST")}, {Environment.GetEnvironmentVariable("DB_PORT")};Initial Catalog={Environment.GetEnvironmentVariable("DB_NAME")};User ID=sa;Password={Environment.GetEnvironmentVariable("DB_SA_PASSWORD")}" : builder.Configuration.GetConnectionString("Capstone");
    services.AddDbContext<CapstoneContext>(opts => opts.UseSqlServer(connectionString));

    services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<>));
    services.AddScoped<IUnitOfWork, UnitOfWork>();
    services.AddScoped<IMedicineService, MedicineService>();
    services.AddScoped<ICartService, CartService>();
    services.AddScoped<IUserService, UserService>();
    services.AddSingleton<IAuthorizationService, AuthorizationService>();
    services.AddSingleton<IValidationService, ValidationService>();

    // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
    services.AddEndpointsApiExplorer();
    services.AddSwaggerGen();
}

WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

ConfigureServices(builder);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Data population
using var scope = app.Services.CreateScope();
var context = scope.ServiceProvider.GetRequiredService<CapstoneContext>();
context.Database.EnsureCreated();
context.Add(new User()
{
    Username = "Denis.Dragomir",
    FirstName = "Denis",
    LastName = "Alexandru",
    E_mail = "denis.alexandru88@gmail.com",
    Password = "tg+jmsAU6Ol+W3CJIrfrI1kFmgczdr9VGaVYtDTLO6A=",
    Role = "Administrator"
});

context.SaveChanges();

// This one should be used only on non-development environments
// I will use it here for now, then move it if I deploy the application
app.ConfigureExceptionHandler();

app.UseCors("Capstone Frontend");

app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
