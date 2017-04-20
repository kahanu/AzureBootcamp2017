using GolfTracker.Services.WebApi.NoSql.Helpers;
using Newtonsoft.Json;
using System;

namespace GolfTracker.Services.WebApi.NoSql.Entities.Golfers
{
    public class Round
    {
        [JsonProperty(PropertyName = "score")]
        public int Score { get; set; }

        [JsonProperty(PropertyName = "netScore")]
        public int NetScore { get; set; }

        [JsonProperty(PropertyName = "datePlayed")]
        public DateTime DatePlayed { get; set; }

        public int DateEpoch { get { return DatePlayed.ToEpoch(); } }

        [JsonProperty(PropertyName = "golfCourse")]
        public GolfCoursePlayed GolfCourse { get; set; }
    }
}
