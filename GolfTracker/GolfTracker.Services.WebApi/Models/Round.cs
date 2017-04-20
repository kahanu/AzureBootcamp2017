using System;

namespace GolfTracker.Services.WebApi.Models
{
    ///<summary>Part of Golfer</summary>
    public partial class Round
    {
        public Guid Id { get; set; }
        public Guid GolferId { get; set; }
        public Guid GolfCoursePlayedId { get; set; }
        public int Score { get; set; }
        public int NetScore { get; set; }
        public DateTime DatePlayed { get; set; }

        public virtual GolfCoursePlayed GolfCoursePlayed { get; set; }
        public virtual Golfer Golfer { get; set; }
    }
}
