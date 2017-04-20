using GolfTracker.Services.WebApi.NoSql.Entities;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace GolfTracker.Services.WebApi.NoSql.Repositories
{
    public interface IRepository<T>
         where T : EntityBase
    {
        /// <summary>
        /// Get All by the generic type.
        /// </summary>
        /// <param name="predicate">An optional Where clause.</param>
        /// <returns>A list of T.</returns>
        IEnumerable<T> Get(Expression<Func<T, bool>> predicate = null);

        /// <summary>
        /// Get by Id for the generic type.
        /// </summary>
        /// <param name="id">The string Id.</param>
        /// <returns></returns>
        Task<T> GetById(string id);

        /// <summary>
        /// The POST method.  (Insert)
        /// </summary>
        /// <param name="entity">The new entity to insert.</param>
        /// <returns>A Task result.</returns>
        Task<Microsoft.Azure.Documents.Client.ResourceResponse<Microsoft.Azure.Documents.Document>> CreateDocumentAsync(T entity);

        /// <summary>
        /// The PUT method. (Update)
        /// </summary>
        /// <param name="entity">The entity to update.</param>
        /// <returns>The entity.</returns>
        Task<Microsoft.Azure.Documents.Client.ResourceResponse<Microsoft.Azure.Documents.Document>> UpdateDocumentAsync(T entity);

        /// <summary>
        /// The DELETE method.
        /// </summary>
        /// <param name="id">The string Id.</param>
        /// <returns>An empty Task.</returns>
        Task<Microsoft.Azure.Documents.Client.ResourceResponse<Microsoft.Azure.Documents.Document>> DeleteDocumentAsync(string id);

    }
}
