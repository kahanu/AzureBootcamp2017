using System;
using System.Collections.Generic;

namespace GolfTracker.Services.WebApi.Models
{
    ///<summary>Part of GolfClub</summary>
    public partial class GolfCourse
    {
        public GolfCourse()
        {
            Tees = new HashSet<Tee>();
        }

        public Guid Id { get; set; }
        public Guid GolfClubId { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Tee> Tees { get; set; }
        public virtual GolfClub GolfClub { get; set; }
    }
}
