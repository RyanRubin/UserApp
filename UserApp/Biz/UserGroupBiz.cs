using UserApp.Db;
using UserApp.Models;

namespace UserApp.Biz
{
    public class UserGroupBiz
    {
        private readonly UserAppDbContext userAppDbContext;

        public UserGroupBiz(UserAppDbContext userAppDbContext)
        {
            this.userAppDbContext = userAppDbContext;
        }

        public IEnumerable<UserGroup> GetAll()
        {
            return userAppDbContext.UserGroups;
        }

        public UserGroup? Get(int id)
        {
            return userAppDbContext.UserGroups.FirstOrDefault(userGroup => userGroup.Id == id);
        }

        public UserGroup Create(UserGroup userGroup)
        {
            string validation = Validate(userGroup);
            if (!string.IsNullOrWhiteSpace(validation))
            {
                throw new ServiceException(validation);
            }
            userAppDbContext.UserGroups.Add(userGroup);
            userAppDbContext.SaveChanges();
            return userGroup;
        }

        public UserGroup? Update(int id, UserGroup userGroupInput)
        {
            string validation = Validate(userGroupInput);
            if (!string.IsNullOrWhiteSpace(validation))
            {
                throw new ServiceException(validation);
            }
            UserGroup? userGroup = userAppDbContext.UserGroups.FirstOrDefault(userGroup => userGroup.Id == id);
            if (userGroup != null)
            {
                userGroup.Name = userGroupInput.Name;
                userGroup.Email = userGroupInput.Email;
                userAppDbContext.SaveChanges();
            }
            return userGroup;
        }

        public void Delete(int id)
        {
            UserGroup? userGroup = userAppDbContext.UserGroups.FirstOrDefault(userGroup => userGroup.Id == id);
            if (userGroup != null)
            {
                userAppDbContext.UserGroups.Remove(userGroup);
                userAppDbContext.SaveChanges();
            }
        }

        private string Validate(UserGroup userGroup)
        {
            if (string.IsNullOrWhiteSpace(userGroup.Name))
            {
                return "Name is required.";
            }
            if (string.IsNullOrWhiteSpace(userGroup.Email))
            {
                return "Email is required.";
            }
            return "";
        }
    }
}
