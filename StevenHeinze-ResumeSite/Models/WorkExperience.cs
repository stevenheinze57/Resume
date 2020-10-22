using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Websites.Models
{
    public class WorkExperience
    {
        public int Id { get; set; }
        public int WorkPositionId { get; set; }
        public String Description { get; set; }
    }
}
