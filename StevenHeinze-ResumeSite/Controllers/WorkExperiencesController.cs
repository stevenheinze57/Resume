﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Websites.Models;

namespace Websites.Controllers
{
    [Route("api/[controller]")]
    public class WorkExperiencesController : Controller 
    {

        private readonly WorkExperienceContext _workexperiencecontext;

        public WorkExperiencesController(WorkExperienceContext workexperiencecontext)
        {
            this._workexperiencecontext = workexperiencecontext;
        }

        [HttpGet]
        public ActionResult<IEnumerable<WorkExperience>> GetWorkExperiences()
        {
            try
            {
                return Ok(_workexperiencecontext.WorkExperiences);
            }
            catch
            {
                return BadRequest();
            }
        }
    }
}
