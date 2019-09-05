using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Websites.Models;

namespace Websites.Controllers
{
    [Route("api/[controller]")]
    public class FutureSkillsController : Controller
    {
        private readonly FutureSkillContext _futureSkillContext;

        public FutureSkillsController(FutureSkillContext futureSkillContext)
        {
            _futureSkillContext = futureSkillContext;
        }

        [HttpGet]
        public ActionResult<IEnumerable<FutureSkill>> GetFutureSkills()
        {
            return _futureSkillContext.FutureSkills;
        } 

    }
}
