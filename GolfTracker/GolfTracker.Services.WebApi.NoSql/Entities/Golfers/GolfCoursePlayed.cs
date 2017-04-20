using GolfTracker.Services.WebApi.NoSql.Entities.GolfClubs;
using Newtonsoft.Json;

namespace GolfTracker.Services.WebApi.NoSql.Entities.Golfers
{
    public class GolfCoursePlayed
    {
        [JsonProperty(PropertyName = "golfClubName")]
        public string GolfClubName { get; set; }

        [JsonProperty(PropertyName = "golfCourseName")]
        public string GolfCourseName { get; set; }

        [JsonProperty(PropertyName = "teePlayed")]
        public Tee TeePlayed { get; set; }
    }
}
