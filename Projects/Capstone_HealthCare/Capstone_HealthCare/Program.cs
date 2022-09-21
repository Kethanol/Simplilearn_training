using Microsoft.EntityFrameworkCore;
using Repository;
using Repository.Concrete;
using Repository.Concrete.Mapper;
using Repository.Contracts;
using Repository.Contracts.Mapper;

static void ConfigureServices(WebApplicationBuilder builder)
{
    var services = builder.Services;

    services.AddControllers();

    services.AddRouting(opts =>
    {
        opts.LowercaseUrls = true;
    });

    var connectionString = builder.Configuration.GetConnectionString("sample");
    services.AddDbContext<CapstoneContext>(opts => opts.UseSqlServer(connectionString));

    services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<>));
    services.AddScoped<IUnitOfWork, UnitOfWork>();
    services.AddSingleton<IMapper, Mapper>();

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

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();