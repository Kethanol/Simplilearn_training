﻿using Microsoft.EntityFrameworkCore;
using Repository.Contracts;

namespace Repository.Concrete
{
    public class GenericRepository<TEntity> : IGenericRepository<TEntity> where TEntity : class
    {
        private readonly CapstoneContext _context;
        private readonly DbSet<TEntity> _set;

        public GenericRepository(CapstoneContext context)
        {
            _context = context;
            _set = context.Set<TEntity>();
        }

        public async Task<IEnumerable<TEntity>> GetAllAsync()
        {
            return await _set.ToListAsync();
        }

        public async Task<TEntity?> GetAsync(int id)
        {
            return await _set.FindAsync(id);
        }

        public async Task InsertAsync(TEntity model)
        {
            await _set.AddAsync(model);
        }

        public void UpdateAsync(TEntity model)
        {
            _set.Update(model);
        }

        public async Task DeleteAsync(int id)
        {
            var toDelete = await _set.FindAsync(id);

            if (toDelete != null)
            {
                if (_context.Entry(toDelete).State == EntityState.Detached)
                    _set.Attach(toDelete);

                _set.Remove(toDelete);
            }
        }
    }
}