using Microsoft.EntityFrameworkCore;
using UserApp.Biz;
using UserApp.Db;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddCors(opt =>
{
    opt.AddDefaultPolicy(corsBuilder =>
    {
        corsBuilder.WithOrigins(builder.Configuration["CorsAllowedOrigin"])
        .AllowAnyHeader()
        .AllowAnyMethod();
    });
});
builder.Services.AddControllersWithViews();
builder.Services.AddDbContext<UserAppDbContext>(opt => opt.UseInMemoryDatabase("UserAppDb"));
builder.Services.AddScoped<IUserBiz, UserBiz>();
builder.Services.AddScoped<IUserGroupBiz, UserGroupBiz>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.UseCors();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;

app.Run();
