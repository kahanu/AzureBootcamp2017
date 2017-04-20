using Newtonsoft.Json;

namespace GolfTracker.Services.WebApi.NoSql.Entities.GolfClubs
{
    public class Tee
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
