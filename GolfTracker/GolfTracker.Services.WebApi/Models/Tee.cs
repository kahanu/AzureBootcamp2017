using System;
using System.Collections.Generic;

namespace GolfTracker.Services.WebApi.Models
{
    ///<summary>Part of GolfClub</summary>
    public class Tee
    {
        public Guid Id { get; set; }
        public Guid GolfCourseId { get; set; }
        public string TeeName { get; set; }
        public string Gender { get; set; }
        public int Length { get; set; }
        public int Slope { get; set; }
        public decimal Rating { get; set; }
        public int Par { get; set; }

        public virtual GolfCourse GolfCourse { get; set; }
    }
}
