using System;
using System.Collections.Generic;
using System.Runtime.Serialization;

namespace GolfTracker.Services.WebApi.Contracts
{
    [DataContract]
    public partial class GolferInformation
    {
        [DataMember]
        public Guid Id { get; set; } = Guid.Empty;
        [DataMember]
        public string Name { get; set; } = string.Empty;
        [DataMember]
        public decimal Handicap { get; set; } = 0.0m;
        [DataMember]
        public bool IsPlus { get; set; } = false;
        [DataMember]
        public string UserName { get; set; } = string.Empty;
        [DataMember]
        public List<RoundInformation> Rounds { get; set; } = new List<RoundInformation>();
    }
}
