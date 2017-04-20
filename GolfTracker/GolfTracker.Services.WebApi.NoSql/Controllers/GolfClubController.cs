using GolfTracker.Services.WebApi.NoSql.Entities.GolfClubs;
using GolfTracker.Services.WebApi.NoSql.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace GolfTracker.Services.WebApi.NoSql.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class GolfClubController : BaseController<GolfClub>
    {
        #region ctors

        private readonly IGolfClubRepository _repo;

        public GolfClubController(IGolfClubRepository repo) : base(repo)
        {
            this._repo = repo;
        }
        #endregion
    }
}