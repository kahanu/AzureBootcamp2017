using GolfTracker.Services.WebApi.NoSql.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GolfTracker.Services.WebApi.NoSql.Controllers
{
    [Produces("application/json")]
    public class BaseController<T> : Controller where T : Entities.EntityBase
    {
        #region ctors
        private readonly IRepository<T> _repo;

        public BaseController(IRepository<T> repo)
        {
            this._repo = repo;
        }
        #endregion

        #region Standard CRUD

        [HttpGet]
        [AllowAnonymous]
        public virtual IEnumerable<T> Get()
        {
            var result = _repo.Get();

            return result;
        }

        [Route("{id}")]
        [HttpGet]
        public virtual async Task<IActionResult> GetById(string id)
        {
            T model = await _repo.GetById(id);
            if (model == null)
                return NotFound();

            return Ok(model);
        }
        
        [HttpPut]
        [HttpPost]
        public virtual async Task<IActionResult> Post([FromBody]T entity)
        {
            if (ModelState.IsValid)
            {
                string id = string.Empty;

                if (string.IsNullOrEmpty(entity.Id))
                {
                    // Insert
                    var result = await _repo.CreateDocumentAsync(entity);
                    id = result.Resource.Id;
                }
                else
                {
                    // Update
                    await _repo.UpdateDocumentAsync(entity);
                    id = entity.Id;
                }

                var model = _repo.GetById(id);

                return Ok(model.Result);
            }
            else
            {
                return BadRequest("Model is invalid.");
            }
        }


        [Route("{id}")]
        [HttpDelete]
        public virtual async Task<IActionResult> Delete(string id)
        {
            try
            {
                await _repo.DeleteDocumentAsync(id);

                return Ok();
            }
            catch (Exception)
            {
                return NotFound();
            }
        }

        #endregion
    }
}