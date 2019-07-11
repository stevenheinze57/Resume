using Microsoft.EntityFrameworkCore;

namespace ResumeSite.Models
{
    public class SkillContext : DbContext
    {
        public SkillContext(DbContextOptions<SkillContext> options) :base (options)
        {
            
        }

        public DbSet<Skill> Skills { get; set; }
    }
}