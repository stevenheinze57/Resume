﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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

        // GET: api/<controller>
        [HttpGet]
        public ActionResult<IEnumerable<Skill>> GetSkills()
        {
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
