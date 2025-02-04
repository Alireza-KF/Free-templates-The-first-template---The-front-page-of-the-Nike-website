using Microsoft.AspNetCore.Mvc;

namespace AspNetCoreSimpleSite.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
            return View();
        }

        public IActionResult Dashboard()
        {
            if (TempData["IsLoggedIn"] as bool? == true)
            {
                return View();
            }
            return RedirectToAction("Index");
        }
    }
}
