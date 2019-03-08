using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace GolfTracker.Services.WebApi.Models
{
    public partial class GolfTrackerContext : DbContext
    {
        public virtual DbSet<GolfClub> GolfClub { get; set; }
        public virtual DbSet<GolfCourse> GolfCourse { get; set; }
        public virtual DbSet<Tee> Tee { get; set; }
        public virtual DbSet<Golfer> Golfer { get; set; }
        public virtual DbSet<Round> Round { get; set; }
        public virtual DbSet<GolfCoursePlayed> GolfCoursePlayed { get; set; }
        public virtual DbSet<TeePlayed> TeePlayed { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
            optionsBuilder.UseSqlServer(@"Server=eps-azurebootcamp.database.windows.net;Database=GolfTracker;User Id=DevUser;Password=P@ssw0rd");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<GolfClub>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Location)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<GolfCourse>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.HasOne(d => d.GolfClub)
                    .WithMany(p => p.GolfCourses)
                    .HasForeignKey(d => d.GolfClubId)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("FK_GolfCourse_GolfClub");
            });

            modelBuilder.Entity<Tee>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Gender)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Rating).HasColumnType("decimal");

                entity.Property(e => e.TeeName)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.HasOne(d => d.GolfCourse)
                    .WithMany(p => p.Tees)
                    .HasForeignKey(d => d.GolfCourseId)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("FK_Tee_GolfCourse");
            });



            modelBuilder.Entity<Golfer>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Handicap).HasColumnType("decimal");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.UserName)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<Round>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.DatePlayed).HasColumnType("datetime");

                entity.HasOne(d => d.GolfCoursePlayed)
                    .WithMany(p => p.Rounds)
                    .HasForeignKey(d => d.GolfCoursePlayedId)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("FK_Round_GolfCoursePlayed");

                entity.HasOne(d => d.Golfer)
                    .WithMany(p => p.Rounds)
                    .HasForeignKey(d => d.GolferId)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("FK_Round_Golfer");
            });

            modelBuilder.Entity<GolfCoursePlayed>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.GolfClubName)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.GolfCourseName)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<TeePlayed>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Gender)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Rating).HasColumnType("decimal");

                entity.Property(e => e.TeeName)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.HasOne(d => d.GolfCoursePlayed)
                    .WithMany(p => p.TeesPlayed)
                    .HasForeignKey(d => d.GolfCoursePlayedId)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("FK_TeePlayed_GolfCoursePlayed");
            });
        }
    }
}