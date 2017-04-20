using Newtonsoft.Json;
using System.Collections.Generic;

namespace GolfTracker.Services.WebApi.NoSql.Entities.GolfClubs
{
    public class GolfCourse
    {
        [JsonProperty(PropertyName = "name")]
        public string Name { get; set; }

        [JsonProperty(PropertyName = "tees")]
        public List<Tee> Tees { get; set; }
    }
}
