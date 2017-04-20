using GolfTracker.Services.WebApi.NoSql.Entities.Golfers;
using GolfTracker.Services.WebApi.NoSql.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace GolfTracker.Services.WebApi.NoSql.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class GolferController : BaseController<Golfer>
    {
        #region ctors

        private readonly IGolferRepository _repo;

        public GolferController(IGolferRepository repo) : base(repo)
        {
            this._repo = repo;
        }

        #endregion
    }
}