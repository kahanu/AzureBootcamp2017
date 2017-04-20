using GolfTracker.Services.WebApi.NoSql.Entities.GolfClubs;
using GolfTracker.Services.WebApi.NoSql.Helpers;

namespace GolfTracker.Services.WebApi.NoSql.Repositories
{
    public class GolfClubRepository : RepositoryBase<GolfClub>, IGolfClubRepository
    {
        public GolfClubRepository() : base("golfclub", AppSettingsConfig.Db, AppSettingsConfig.MainCollection)
        {

        }

        // Implemented custom members go here.
    }
}
