using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Websites.Models
{
    public class WorkPositionContext : DbContext
    {

        public WorkPositionContext(DbContextOptions<WorkPositionContext> options) : base(options)
        {

        }

        public DbSet<WorkPosition> WorkPositions { get; set; }

    }
}
