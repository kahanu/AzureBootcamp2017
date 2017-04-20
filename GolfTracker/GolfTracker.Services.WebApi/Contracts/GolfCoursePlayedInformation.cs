using System;
using System.Runtime.Serialization;

namespace GolfTracker.Services.WebApi.Contracts
{
    [DataContract]
    public class GolfCoursePlayedInformation
    {
        [DataMember]
        public Guid Id { get; set; } = Guid.Empty;
        [DataMember]
        public string GolfClubName { get; set; } = string.Empty;
        [DataMember]
        public string GolfCourseName { get; set; } = string.Empty;
        [DataMember]
        public TeePlayedInformation TeePlayed { get; set; } = new TeePlayedInformation();
    }
}
