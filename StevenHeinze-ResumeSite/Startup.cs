using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using ResumeSite.Models;
using Microsoft.SqlServer;
using Microsoft.EntityFrameworkCore;
using AutoMapper;
using Websites.Models;

namespace Websites
{
    public class Startup
    {

        public IConfiguration Configuration { get; }

        public Startup(IConfiguration configuration) => Configuration = configuration;

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
{
    options.AddPolicy("AllowAll", p =>
    {
        p.AllowAnyOrigin()
        .AllowAnyHeader()
        .AllowAnyMethod();
    });
});
            services.AddDbContext<SkillContext>
                (opt => opt.UseSqlServer(Configuration["Data:Connection:ConnectionString"]));
            services.AddDbContext<SubSkillContext>
                (opt => opt.UseSqlServer(Configuration["Data:Connection:ConnectionString"]));
            services.AddDbContext<FutureSkillContext>
                (opt => opt.UseSqlServer(Configuration["Data:Connection:ConnectionString"]));
            services.AddDbContext<WorkPositionContext>
                (opt => opt.UseSqlServer(Configuration["Data:Connection:ConnectionString"]));
            services.AddDbContext<WorkExperienceContext>
                (opt => opt.UseSqlServer(Configuration["Data:Connection:ConnectionString"]));
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);

            // In production, the Angular files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/dist";
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            app.UseCors("AllowAll");

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller}/{action=Index}/{id?}");
            });

            app.UseSpa(spa =>
            {
                // To learn more about options for serving an Angular SPA from ASP.NET Core,
                // see https://go.microsoft.com/fwlink/?linkid=864501

                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseAngularCliServer(npmScript: "serve");
                }
            });
        }
    }
}
