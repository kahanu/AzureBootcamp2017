using Newtonsoft.Json;
using System.Collections.Generic;

namespace GolfTracker.Services.WebApi.NoSql.Entities.Golfers
{
    /// <summary>
    /// Only the root object of the document tree, in this case Golfer,
    /// needs to inherit from EntityBase.  The related (or embedded) objects
    /// do not need to inherit from EntityBase.
    /// </summary>
    public class Golfer : EntityBase
    {
        public Golfer() : base("golfer")
        {

        }

        [JsonProperty(PropertyName = "name")]
        public string Name { get; set; }

        [JsonProperty(PropertyName = "handicap")]
        public decimal Handicap { get; set; }

        [JsonProperty(PropertyName = "isPlus")]
        public bool IsPlus { get; set; }

        [JsonProperty(PropertyName = "rounds")]
        public List<Round> Rounds { get; set; }

        [JsonProperty(PropertyName = "userName")]
        public string UserName { get; set; }

    }
}
