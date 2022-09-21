namespace Repository.Contracts
{
    public interface IUnitOfWork
    {
        Task SaveChangesAsync();
    }
}
