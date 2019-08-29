using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using ResumeSite.Dtos;
using ResumeSite.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Websites.Controllers
{
    [Route("api/[controller]")]
    public class SkillsController : Controller
    {

        private readonly SkillContext _skillcontext;
        //private readonly IMapper _mapper;

        public SkillsController(SkillContext skillContext)
        {
            _skillcontext = skillContext;
            //_mapper = mapper;
        }

        // GET: api/<controller>
        [HttpGet]
        public ActionResult<IEnumerable<Skill>> GetSkills()
        {
            //var skillsData = _skillcontext.Skills;
            //var skillsDto = _mapper.Map<GetSkillsDto>(skillsData);
            return _skillcontext.Skills;
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        //// POST api/<controller>
        //[HttpPost]
        //public void Post([FromBody]string value)
        //{
        //}

        //// PUT api/<controller>/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody]string value)
        //{
        //}

        //// DELETE api/<controller>/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
