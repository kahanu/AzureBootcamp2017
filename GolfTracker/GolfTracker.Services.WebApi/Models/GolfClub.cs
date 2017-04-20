using System;
using System.Collections.Generic;

namespace GolfTracker.Services.WebApi.Models
{
    /// <summary>
    /// Part of GolfClub
    /// </summary>
    public class GolfClub 
    {
        public GolfClub()
        {
            GolfCourses = new HashSet<GolfCourse>();
        }

        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Location { get; set; }

        public virtual ICollection<GolfCourse> GolfCourses { get; set; }
    }
}
