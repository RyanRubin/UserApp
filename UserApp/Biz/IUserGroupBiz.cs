using UserApp.Models;

namespace UserApp.Biz
{
    public interface IUserGroupBiz
    {
        IEnumerable<UserGroup> GetAll();
        UserGroup? Get(int id);
        UserGroup Create(UserGroup userGroup);
        UserGroup? Update(int id, UserGroup userGroupInput);
        void Delete(int id);
    }
}
