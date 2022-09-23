using BusinessLogicTier.Concrete;
using BusinessLogicTier.Contracts;
using Capstone_HealthCare.Extensions;
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

    services.UseJWTConfiguration(builder.Configuration);

    var connectionString = builder.Configuration.GetConnectionString("Capstone");
    services.AddDbContext<CapstoneContext>(opts => opts.UseSqlServer(connectionString));

    services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<>));
    services.AddScoped<IUnitOfWork, UnitOfWork>();
    services.AddScoped<IMedicineService, MedicineService>();
    services.AddScoped<ICartService, CartService>();
    services.AddSingleton<IAuthorizationService, AuthorizationService>();

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

// This one should be used only on non-development environments
// I will use it here for now, then move it if I deploy the application
app.ConfigureExceptionHandler();

app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
