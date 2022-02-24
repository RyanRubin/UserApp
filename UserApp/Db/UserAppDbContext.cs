using Microsoft.EntityFrameworkCore;
using UserApp.Models;

namespace UserApp.Db
{
    public class UserAppDbContext : DbContext
    {
        public UserAppDbContext(DbContextOptions<UserAppDbContext> options) : base(options) { }

        public DbSet<User> Users => Set<User>();
        public DbSet<UserGroup> UserGroups => Set<UserGroup>();
    }
}
