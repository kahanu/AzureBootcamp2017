using System;
using System.Collections.Generic;
using System.Runtime.Serialization;

namespace GolfTracker.Services.WebApi.Contracts
{
    [DataContract]
    public class GolfClubInformation 
    {
        [DataMember]
        public Guid Id { get; set; } = Guid.Empty;
        [DataMember]
        public string Name { get; set; } = string.Empty;
        [DataMember]
        public string Location { get; set; } = string.Empty;
        [DataMember]
        public List<GolfCourseInformation> GolfCourses { get; set; } = new List<GolfCourseInformation>();
    }
}
