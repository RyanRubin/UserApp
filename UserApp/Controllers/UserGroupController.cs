using Microsoft.AspNetCore.Mvc;
using UserApp.Biz;
using UserApp.Models;

namespace UserApp.Controllers
{
    [ApiController]
    [Route("user-group")]
    public class UserGroupController
    {
        private readonly IUserGroupBiz userGroupBiz;

        public UserGroupController(IUserGroupBiz userGroupBiz)
        {
            this.userGroupBiz = userGroupBiz;
        }

        [HttpGet]
        public ResponseJson GetAll()
        {
            ResponseJson response = new ResponseJson();
            try
            {
                response.ReturnValue = userGroupBiz.GetAll();
            }
            catch (Exception ex)
            {
                response.ErrorMessage = ex.Message;
            }
            return response;
        }

        [HttpGet("{id}")]
        public ResponseJson Get(int id)
        {
            ResponseJson response = new ResponseJson();
            try
            {
                response.ReturnValue = userGroupBiz.Get(id);
            }
            catch (Exception ex)
            {
                response.ErrorMessage = ex.Message;
            }
            return response;
        }

        [HttpPost]
        public ResponseJson Post([FromBody] UserGroup userGroup)
        {
            ResponseJson response = new ResponseJson();
            try
            {
                response.ReturnValue = userGroupBiz.Create(userGroup);
            }
            catch (Exception ex)
            {
                response.ErrorMessage = ex.Message;
            }
            return response;
        }

        [HttpPut("{id}")]
        public ResponseJson Put(int id, [FromBody] UserGroup userGroup)
        {
            ResponseJson response = new ResponseJson();
            try
            {
                response.ReturnValue = userGroupBiz.Update(id, userGroup);
            }
            catch (Exception ex)
            {
                response.ErrorMessage = ex.Message;
            }
            return response;
        }

        [HttpDelete("{id}")]
        public ResponseJson Delete(int id)
        {
            ResponseJson response = new ResponseJson();
            try
            {
                userGroupBiz.Delete(id);
            }
            catch (Exception ex)
            {
                response.ErrorMessage = ex.Message;
            }
            return response;
        }
    }
}
