using Entities.Entities;
using Microsoft.EntityFrameworkCore;

namespace Repository
{
    public class CapstoneContext : DbContext
    {
        public CapstoneContext() { }

        public CapstoneContext(DbContextOptions<CapstoneContext> options) : base(options) { }

        #region Tables
        public virtual DbSet<Medicine>? Medicines { get; set; }
        public virtual DbSet<Cart>? Carts { get; set; }
        public virtual DbSet<User>? Users { get; set; }
        public virtual DbSet<CartXMedicine>? CartXMedicines { get; set; }
        #endregion

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasDefaultSchema("dbo");

            modelBuilder.Entity<Medicine>(medicine =>
            {
                medicine.HasKey(x => x.Id);

                medicine.Property(x => x.Name)
                .HasMaxLength(30)
                .HasColumnName("Name");

                medicine.Property(x => x.Description)
                .HasMaxLength(120)
                .HasColumnName("Description");

                medicine.Property(x => x.SchemaOfTreatment)
                .HasMaxLength(50)
                .HasColumnName("SchemaOfTreatment");

                medicine.Property(x => x.MinimumAge)
                .HasColumnName("MinimumAge");

                medicine.Property(x => x.Price)
                .HasColumnName("Price")
                .HasMaxLength(16)
                .HasPrecision(2);

                medicine.ToTable("Medicine");
            });

            modelBuilder.Entity<CartXMedicine>(entity =>
            {
                entity.HasKey(x => new { x.CartId, x.MedicineId });

                entity.HasOne(x => x.Cart).WithMany(x => x.CartXMedicines).HasForeignKey(x => x.CartId);
                entity.HasOne(x => x.Medicine).WithMany(x => x.CartXMedicines).HasForeignKey(x => x.MedicineId);

                entity.ToTable("CartXMedicine");
            });

            modelBuilder.Entity<Cart>(cart =>
            {
                cart.HasKey(x => x.Id);
                cart.ToTable("Cart");
            });

            modelBuilder.Entity<User>(user =>
            {
                user.HasKey(x => x.Id);

                user.Property(x => x.Username)
                .HasMaxLength(30)
                .HasColumnName("Username");

                user.Property(x => x.Password)
                .HasMaxLength(256)
                .HasColumnName("Password");

                user.Property(x => x.E_mail)
                .HasMaxLength(50)
                .HasColumnName("Email");

                user.Property(x => x.FirstName)
                .HasMaxLength(30)
                .HasColumnName("FirstName");

                user.Property(x => x.LastName)
                .HasMaxLength(30)
                .HasColumnName("LastName");

                user.Property(x => x.Role)
                .HasMaxLength(30)
                .HasColumnName("Role");

                user.ToTable("User");
            });
        }
    }
}
