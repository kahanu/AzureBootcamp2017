using Newtonsoft.Json;
using System.Collections.Generic;

namespace GolfTracker.Services.WebApi.NoSql.Entities.GolfClubs
{
    /// <summary>
    /// Only the root object of the document tree, in this case GolfClub,
    /// needs to inherit from EntityBase.  The GolfCourse and Tee
    /// entities do not.
    /// </summary>
    public class GolfClub : EntityBase
    {
        public GolfClub():base("golfclub")
        {
            GolfCourses = new HashSet<GolfCourse>();
        }

        [JsonProperty(PropertyName = "name")]
        public string Name { get; set; }

        [JsonProperty(PropertyName = "location")]
        public string Location { get; set; }

        [JsonProperty(PropertyName = "golfCourses")]
        public virtual ICollection<GolfCourse> GolfCourses { get; set; }
    }
}
