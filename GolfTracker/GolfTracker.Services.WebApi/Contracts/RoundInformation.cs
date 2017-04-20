using System;
using System.Runtime.Serialization;

namespace GolfTracker.Services.WebApi.Contracts
{
    [DataContract]
    public partial class RoundInformation
    {
        [DataMember]
        public Guid Id { get; set; } = Guid.Empty;
        [DataMember]
        public GolfCoursePlayedInformation GolfCourse { get; set; } = new GolfCoursePlayedInformation();
        [DataMember]
        public int Score { get; set; } = 0;
        [DataMember]
        public int NetScore { get; set; } = 0;
        [DataMember]
        public DateTime DatePlayed { get; set; } = DateTime.MinValue;
    }
}
