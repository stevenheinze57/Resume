using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ResumeSite.Models;
using ResumeSite.Dtos;
using AutoMapper;

namespace Websites.Helpers
{
    public class DataMapper: Profile
    {

        public DataMapper()
        {
            CreateMap<GetSkillsDto, Skill>().ReverseMap();
            CreateMap<Skill, GetSkillsDto>().ReverseMap();
        }
        

    }
}
