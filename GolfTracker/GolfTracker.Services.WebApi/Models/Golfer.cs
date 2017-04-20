using System;
using System.Collections.Generic;

namespace GolfTracker.Services.WebApi.Models
{
    /// <summary>
    /// Part of Golfer
    /// </summary>
    public partial class Golfer
    {
        public Golfer()
        {
            Rounds = new HashSet<Round>();
        }

        public Guid Id { get; set; }
        public string Name { get; set; }
        public decimal Handicap { get; set; }
        public bool IsPlus { get; set; }
        public string UserName { get; set; }

        public virtual ICollection<Round> Rounds { get; set; }
    }
}
