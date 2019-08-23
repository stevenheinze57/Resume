

namespace ResumeSite.Models
{
    public class SubSkill : Skill
    {
        public int ParentSkillId { get; set; }
        public string Description { get; set; }
    }
}