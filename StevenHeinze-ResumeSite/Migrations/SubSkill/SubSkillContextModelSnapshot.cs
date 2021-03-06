﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using ResumeSite.Models;

namespace Websites.Migrations.SubSkill
{
    [DbContext(typeof(SubSkillContext))]
    partial class SubSkillContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.11-servicing-32099")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("ResumeSite.Models.SubSkill", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("ConfidenceLevel");

                    b.Property<string>("Description");

                    b.Property<string>("Name");

                    b.Property<int>("ParentSkillId");

                    b.Property<int>("Scope");

                    b.Property<int>("YearsOfExperience");

                    b.HasKey("Id");

                    b.ToTable("SubSkills");
                });
#pragma warning restore 612, 618
        }
    }
}
