using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ResumeSite.Dtos
{
    public class GetSkillsDto
    {

        [Required]
        public int Id { get; set; }
        public string Name { get; set; }
        public int ConfidenceLevel { get; set; }
        public int YearsOfExperience { get; set; }
        public int Scope { get; set; }

    }
}
