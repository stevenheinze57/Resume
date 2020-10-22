using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using ResumeSite.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Websites.Controllers
{
    [Route("api/[controller]")]
    public class SkillsController : Controller
    {

        private readonly SkillContext _skillcontext;

        public SkillsController(SkillContext skillContext)
        {
            _skillcontext = skillContext;
        }
        
        [HttpGet]
        public ActionResult<IEnumerable<Skill>> GetSkills()
        {
            try
            {
                return Ok(_skillcontext.Skills);
            }
            catch
            {
                return BadRequest();
            }
        }
        
    }
}
