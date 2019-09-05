using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Websites.Models
{
    public class FutureSkillContext : DbContext
    {
        public FutureSkillContext(DbContextOptions<FutureSkillContext> options) : base(options)
        {

        }

        public DbSet<FutureSkill> FutureSkills { get; set; }
    }
}
