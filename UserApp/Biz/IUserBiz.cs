using UserApp.Models;

namespace UserApp.Biz
{
    public interface IUserBiz
    {
        IEnumerable<User> GetAll();
        User? Get(int id);
        User Create(User user);
        User? Update(int id, User userInput);
        void Delete(int id);
    }
}
