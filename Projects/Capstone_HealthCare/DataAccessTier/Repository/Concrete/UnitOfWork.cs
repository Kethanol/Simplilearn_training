using Entities.Entities;
using Repository.Contracts;

namespace Repository.Concrete
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly CapstoneContext _context;

        private GenericRepository<Medicine>? _medicineRepository;
        private GenericRepository<Cart>? _cartRepository;
        private GenericRepository<User>? _userRepository;
        private GenericRepository<CartXMedicine>? _cartMedicineRepository;

        public UnitOfWork(CapstoneContext context)
        {
            _context = context;
        }

        public GenericRepository<Medicine> MedicineRepository
        {
            get
            {
                _medicineRepository ??= new GenericRepository<Medicine>(_context);
                return _medicineRepository;
            }
        }

        public GenericRepository<Cart> CartRepository
        {
            get
            {
                _cartRepository ??= new GenericRepository<Cart>(_context);
                return _cartRepository;
            }
        }

        public GenericRepository<User> UserRepository
        {
            get
            {
                _userRepository ??= new GenericRepository<User>(_context);
                return _userRepository;
            }
        }

        public GenericRepository<CartXMedicine> CartMedicineRepository
        {
            get
            {
                _cartMedicineRepository ??= new GenericRepository<CartXMedicine>(_context);
                return _cartMedicineRepository;
            }
        }

        public async Task SaveChangesAsync()
        {
            await _context.SaveChangesAsync();
        }
    }
}
