using Microsoft.EntityFrameworkCore.Query;
using System.Linq.Expressions;

namespace Repository.Contracts
{
    public interface IGenericRepository<TEntity> where TEntity : class
    {
        Task<IEnumerable<TEntity>> GetAllAsync();
        Task<TEntity?> GetAsync(int id);
        Task<TEntity?> GetByAsync(Expression<Func<TEntity, bool>> condition);
        Task InsertAsync(TEntity model);
        void Update(TEntity model);
        Task DeleteAsync(int id);
        Task<List<TEntity>> GetByWithInclude(Expression<Func<TEntity, bool>>? where, Func<IQueryable<TEntity>, IIncludableQueryable<TEntity, object>>? include);
    }
}
