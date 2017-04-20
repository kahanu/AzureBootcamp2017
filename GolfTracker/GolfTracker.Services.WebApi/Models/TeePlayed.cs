using System;

namespace GolfTracker.Services.WebApi.Models
{
    ///<summary>Part of Golfer</summary>
    public class TeePlayed
    {
        public Guid Id { get; set; }
        public Guid GolfCoursePlayedId { get; set; }
        public string TeeName { get; set; }
        public string Gender { get; set; }
        public int Length { get; set; }
        public int Slope { get; set; }
        public decimal Rating { get; set; }
        public int Par { get; set; }

        public virtual GolfCoursePlayed GolfCoursePlayed { get; set; }
    }
}
