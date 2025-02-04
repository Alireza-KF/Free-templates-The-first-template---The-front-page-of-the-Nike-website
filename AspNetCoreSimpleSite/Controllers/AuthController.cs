using Microsoft.AspNetCore.Mvc;

namespace AspNetCoreSimpleSite.Controllers
{
    public class AuthController : Controller
    {
        [HttpPost]
        public IActionResult Login(string username, string password)
        {
            if (username == "admin" && password == "1234")
            {
                TempData["IsLoggedIn"] = true;
                return RedirectToAction("Dashboard", "Home");
            }
            TempData["Error"] = "Invalid username or password";
            return RedirectToAction("Index", "Home");
        }
    }
}
