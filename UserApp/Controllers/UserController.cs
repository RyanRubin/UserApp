using Microsoft.AspNetCore.Mvc;
using UserApp.Biz;
using UserApp.Db;
using UserApp.Models;

namespace UserApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly UserBiz userBiz;

        public UserController(UserAppDbContext userAppDbContext)
        {
            this.userBiz = new UserBiz(userAppDbContext);
        }

        [HttpGet]
        public ResponseJson GetAll()
        {
            ResponseJson response = new ResponseJson();
            try
            {
                response.ReturnValue = userBiz.GetAll();
            }
            catch (Exception ex)
            {
                response.ErrorMessage = "" + ex;
            }
            return response;
        }

        [HttpGet("{id}")]
        public ResponseJson Get(int id)
        {
            ResponseJson response = new ResponseJson();
            try
            {
                response.ReturnValue = userBiz.Get(id);
            }
            catch (Exception ex)
            {
                response.ErrorMessage = "" + ex;
            }
            return response;
        }

        [HttpPost]
        public ResponseJson Post(User user)
        {
            ResponseJson response = new ResponseJson();
            try
            {
                response.ReturnValue = userBiz.Create(user);
            }
            catch (Exception ex)
            {
                response.ErrorMessage = "" + ex;
            }
            return response;
        }

        [HttpPut("{id}")]
        public ResponseJson Put(int id, User user)
        {
            ResponseJson response = new ResponseJson();
            try
            {
                response.ReturnValue = userBiz.Update(id, user);
            }
            catch (Exception ex)
            {
                response.ErrorMessage = "" + ex;
            }
            return response;
        }

        [HttpDelete("{id}")]
        public ResponseJson Delete(int id)
        {
            ResponseJson response = new ResponseJson();
            try
            {
                userBiz.Delete(id);
            }
            catch (Exception ex)
            {
                response.ErrorMessage = "" + ex;
            }
            return response;
        }
    }
}
