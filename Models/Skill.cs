

using System.Collections.Generic;

namespace ResumeSite.Models
{
    public class Skill 
    {
        public int Id { get; set; }
        public string Name { get; set;}
        public int ConfidenceLevel { get; set;}
        public int YearsOfExperience { get; set; }
        public int Scope { get; set; }
    }
}