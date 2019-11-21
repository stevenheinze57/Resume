using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Websites.Models
{
    public class WorkPosition
    {
        public int Id { get; set; }
        public string Company { get; set; }
        public string Role { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
    }
}
