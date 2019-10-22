using Microsoft.AspNetCore.Mvc;
using ResumeSite.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Websites.Models;

namespace Websites.Controllers
{
    [Route("api/[controller]")]
    public class WorkPositionController
    {

        private readonly WorkPositionContext _workpositioncontext;

        public WorkPositionController(WorkPositionContext workexperiencecontext)
        {
            this._workpositioncontext = workexperiencecontext;
        }

        [HttpGet]
        public ActionResult<IEnumerable<WorkPosition>> getSubSkills()
        {
            return _workpositioncontext.WorkPositions;
        }

    }
}
