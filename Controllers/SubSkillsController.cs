using Microsoft.AspNetCore.Mvc;
using ResumeSite.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Websites.Controllers
{
    [Route("api/[controller]")]
    public class SubSkillsController
    {

        private readonly SubSkillContext _subskillcontext;

        public SubSkillsController(SubSkillContext subskillcontext)
        {
            this._subskillcontext = subskillcontext;
        }

        // GET: api/<controller>
        [HttpGet]
        public ActionResult<IEnumerable<SubSkill>> getSubSkills()
        {
            return _subskillcontext.SubSkills;
        }
    }
}
