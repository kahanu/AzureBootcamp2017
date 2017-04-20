using System;
using System.Collections.Generic;
using System.Runtime.Serialization;

namespace GolfTracker.Services.WebApi.Contracts
{
    [DataContract]
    public partial class GolfCourseInformation
    {
        [DataMember]
        public Guid Id { get; set; } = Guid.Empty;
        [DataMember]
        public string Name { get; set; } = string.Empty;
        [DataMember]
        public List<TeeInformation> Tees { get; set; } = new List<TeeInformation>();
    }
}
