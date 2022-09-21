namespace Repository.Contracts
{
    public interface IGenericRepository<TEntity> where TEntity : class
    {
        Task<IEnumerable<TEntity>> GetAllAsync();
        Task<TEntity?> GetAsync(int id);
        Task InsertAsync(TEntity model);
        void UpdateAsync(TEntity model);
        Task DeleteAsync(int id);
    }
}
