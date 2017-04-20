using System;
using System.Collections.Generic;

namespace GolfTracker.Services.WebApi.Models
{
    ///<summary>Part of Golfer</summary>
    public class GolfCoursePlayed
    {
        public GolfCoursePlayed()
        {
            TeesPlayed = new HashSet<TeePlayed>();
            Rounds = new HashSet<Round>();
        }

        public Guid Id { get; set; }
        public string GolfClubName { get; set; }
        public string GolfCourseName { get; set; }

        public virtual ICollection<TeePlayed> TeesPlayed { get; set; }
        public virtual ICollection<Round> Rounds { get; set; }
    }
}
