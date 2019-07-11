using Microsoft.EntityFrameworkCore;

namespace ResumeSite.Models
{
    public class SubSkillContext : DbContext
    {
        public SubSkillContext(DbContextOptions<SubSkillContext> options) :base (options)
        {
            
        }

        public DbSet<SubSkill> SubSkills { get; set; }

        // protected override void OnModelCreating(DbModelBuilder modelBuilder) 
        // {
        //     modelBuilder.Entity<SubSkill>().Map(subSkill =>
        //         subSkill.MapInheritedProperties();
        //         SubSkill.ToTable(nameof(SubSkillContext.SubSkills));
        //     );
        // }
    }
}