using Microsoft.AspNetCore.Mvc;
using ResumeSite.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Websites.Controllers
{
    [Route("api/[controller]")]
    public class SubSkillsController : Controller
    {

        private readonly SubSkillContext _subskillcontext;

        public SubSkillsController(SubSkillContext subskillcontext)
        {
            this._subskillcontext = subskillcontext;
        }

        // GET: api/<controller>
        [HttpGet]
        public ActionResult<IEnumerable<SubSkill>> GetSubSkills()
        {
            try
            {
                return Ok(_subskillcontext.SubSkills);
            }
            catch
            {
                return BadRequest();
            }
        }
    }
}
