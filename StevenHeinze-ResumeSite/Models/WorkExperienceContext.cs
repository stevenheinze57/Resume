using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Websites.Models
{
    public class WorkExperienceContext : DbContext
    {

        public WorkExperienceContext(DbContextOptions<WorkExperienceContext> options) : base(options)
        {

        }

        public DbSet<WorkExperience> WorkExperiences { get; set; }

    }
}
