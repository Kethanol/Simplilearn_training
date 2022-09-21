using Microsoft.EntityFrameworkCore;
using Repository.Models;

namespace Repository
{
    public class CapstoneContext : DbContext
    {
        public CapstoneContext() {}

        public CapstoneContext(DbContextOptions<CapstoneContext> options): base(options) {}

        #region Tables
        public virtual DbSet<Medicine>? Medicines { get; set; }
        public virtual DbSet<Cart>? Carts { get; set; }
        public virtual DbSet<User>? Users { get; set; }
        #endregion

        // Insert here some code first table creation?
    }
}
