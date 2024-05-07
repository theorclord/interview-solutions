using Database;
using Microsoft.EntityFrameworkCore;
using WebshopAPI.Repositories;

namespace WebshopAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddDefaultPolicy(
                 builder =>
                 {
                     builder.WithOrigins("http://localhost:3000")
                      .AllowAnyHeader()
                      .WithExposedHeaders("Content-Disposition", "X-Instance-Version")
                      .WithMethods("PUT", "GET", "POST", "DELETE", "PATCH")
                      .AllowCredentials();
                 });
            });


            // Add services to the container.
            services.AddTransient<ElectronicDeviceRepository>();

            services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            services.AddEndpointsApiExplorer();
            services.AddSwaggerGen();

            // Add database
            services.AddDbContext<MainDbContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
        }


        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseStaticFiles();
            app.UseRouting();

            // global cors policy
            app.UseCors();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            app.UseSwagger();
            app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Webshop API v1"));
        }
    }
}
