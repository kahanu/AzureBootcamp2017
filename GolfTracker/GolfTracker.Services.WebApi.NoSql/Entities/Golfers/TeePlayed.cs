using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GolfTracker.Services.WebApi.NoSql.Entities.Golfers
{
    public class TeePlayed
    {
        [JsonProperty(PropertyName = "teeName")]
        public string TeeName { get; set; }

        [JsonProperty(PropertyName = "gender")]
        public string Gender { get; set; }

        [JsonProperty(PropertyName = "length")]
        public int Length { get; set; }

        [JsonProperty(PropertyName = "slope")]
        public int Slope { get; set; }

        [JsonProperty(PropertyName = "rating")]
        public decimal Rating { get; set; }

        [JsonProperty(PropertyName = "par")]
        public int Par { get; set; }
    }
}
