using UserApp.Db;
using UserApp.Models;

namespace UserApp.Biz
{
    public class UserBiz
    {
        private readonly UserAppDbContext userAppDbContext;

        public UserBiz(UserAppDbContext userAppDbContext)
        {
            this.userAppDbContext = userAppDbContext;
        }

        public IEnumerable<User> GetAll()
        {
            return userAppDbContext.Users;
        }

        public User? Get(int id)
        {
            return userAppDbContext.Users.FirstOrDefault(user => user.Id == id);
        }

        public User Create(User user)
        {
            string validation = Validate(user);
            if (!string.IsNullOrWhiteSpace(validation))
            {
                throw new ServiceException(validation);
            }
            userAppDbContext.Users.Add(user);
            userAppDbContext.SaveChanges();
            return user;
        }

        public User? Update(int id, User userInput)
        {
            string validation = Validate(userInput);
            if (!string.IsNullOrWhiteSpace(validation))
            {
                throw new ServiceException(validation);
            }
            User? user = userAppDbContext.Users.FirstOrDefault(user => user.Id == id);
            if (user != null)
            {
                user.Name = userInput.Name;
                user.Email = userInput.Email;
                userAppDbContext.SaveChanges();
            }
            return user;
        }

        public void Delete(int id)
        {
            User? user = userAppDbContext.Users.FirstOrDefault(user => user.Id == id);
            if (user != null)
            {
                userAppDbContext.Users.Remove(user);
                userAppDbContext.SaveChanges();
            }
        }

        private string Validate(User user)
        {
            if (string.IsNullOrWhiteSpace(user.Name))
            {
                return "Name is required.";
            }
            if (string.IsNullOrWhiteSpace(user.Email))
            {
                return "Email is required.";
            }
            return "";
        }
    }
}
