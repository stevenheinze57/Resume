using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Websites.Models;

namespace Websites.Controllers
{
    [Route("api/[controller]")]
    public class WorkExperienceController
    {

        private readonly WorkExperienceContext _workexperiencecontext;

        public WorkExperienceController(WorkExperienceContext workexperiencecontext)
        {
            this._workexperiencecontext = workexperiencecontext;
        }

        [HttpGet]
        public ActionResult<IEnumerable<WorkExperience>> getSubSkills()
        {
            return _workexperiencecontext.WorkExperiences;
        }
    }
}
