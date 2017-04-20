using System;
using System.Runtime.Serialization;

namespace GolfTracker.Services.WebApi.Contracts
{
    [DataContract]
    public class TeeInformation
    {
        [DataMember]
        public Guid Id { get; set; } = Guid.Empty;
        [DataMember]
        public string TeeName { get; set; } = string.Empty;
        [DataMember]
        public string Gender { get; set; } = string.Empty;
        [DataMember]
        public int Length { get; set; } = 0;
        [DataMember]
        public int Slope { get; set; } = 0;
        [DataMember]
        public decimal Rating { get; set; } = 0.0m;
        [DataMember]
        public int Par { get; set; } = 0;
    }
}
