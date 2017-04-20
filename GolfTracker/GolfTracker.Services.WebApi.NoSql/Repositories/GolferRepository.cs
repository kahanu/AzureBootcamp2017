using GolfTracker.Services.WebApi.NoSql.Entities.Golfers;
using GolfTracker.Services.WebApi.NoSql.Helpers;

namespace GolfTracker.Services.WebApi.NoSql.Repositories
{
    public class GolferRepository : RepositoryBase<Golfer>, IGolferRepository
    {
        public GolferRepository():base("golfer", AppSettingsConfig.Db, AppSettingsConfig.MainCollection)
        {

        }

        // Implemented custom members go here.
    }
}
