using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.Azure.Documents;
using Microsoft.Azure.Documents.Client;
using GolfTracker.Services.WebApi.NoSql.Entities;
using GolfTracker.Services.WebApi.NoSql.Helpers;

namespace GolfTracker.Services.WebApi.NoSql.Repositories
{
    /// <summary>
    /// All repository classes must inherit from this base class.  This base class 
    /// contains all the basic CRUD operations.
    /// </summary>
    /// <typeparam name="T">The entity type used for the repository.</typeparam>
    public class RepositoryBase<T> : IRepository<T> where T : EntityBase
    {
        #region ctors

        private Expression<Func<T, bool>> _typePredicate = null;
        private readonly string _dbName = string.Empty;
        private readonly string _collectionName = string.Empty;
        private DocumentClient Client;

        /// <summary>
        /// All Repository classes must inherit this base class.
        /// </summary>
        /// <param name="type">The name of the entity (T), which is the same as the name passed into the model (lowercase).</param>
        /// <param name="dbName">The name of the database.</param>
        /// <param name="collectionName">The name of the collection.</param>
        public RepositoryBase(string type, string dbName, string collectionName) 
        {
            _dbName = dbName;
            _collectionName = collectionName;

            Client = new DocumentClient(new Uri(AppSettingsConfig.EndPoint), AppSettingsConfig.AuthKey);
            CreateDatabaseIfNotExistsAsync().Wait();
            CreateCollectionIfNotExistsAsync().Wait();

            _typePredicate = v => v.docType == type;
        }

        #endregion

        #region Public Methods

        /// <summary>
        /// Get a list of T, with an optional predicate.
        /// </summary>
        /// <param name="predicate">The linq expression Where clause.</param>
        /// <returns>An IEnumerable of T.</returns>
        public IEnumerable<T> Get(Expression<Func<T, bool>> predicate = null)
        {
            var query = Client.CreateDocumentQuery<T>(UriFactory.CreateDocumentCollectionUri(_dbName, _collectionName))
                .Where(_typePredicate)
                .AsQueryable();

            if (predicate != null)
            {
                query = query.Where(predicate);
            }

            return query;
        }

        /// <summary>
        /// Get By Id.
        /// </summary>
        /// <param name="id">The string id.</param>
        /// <returns>A Task result of T.</returns>
        public async Task<T> GetById(string id)
        {
            try
            {
                Document document = await Client.ReadDocumentAsync(UriFactory.CreateDocumentUri(_dbName, _collectionName, id));
                return (T)(dynamic)document;
            }
            catch (DocumentClientException e)
            {
                if (e.StatusCode == System.Net.HttpStatusCode.NotFound)
                {
                    return null;
                }
                else
                {
                    throw;
                }
            }
        }

        /// <summary>
        /// Insert a new document.
        /// </summary>
        /// <param name="entity">The entity of type T to insert.</param>
        /// <returns>The Task result of type T.</returns>
        public async Task<ResourceResponse<Document>> CreateDocumentAsync(T entity)
        {
            return await Client.CreateDocumentAsync(UriFactory.CreateDocumentCollectionUri(_dbName, _collectionName), entity);
        }

        /// <summary>
        /// Update the document.
        /// </summary>
        /// <param name="entity">The entity of type T to update.</param>
        /// <returns>The Task result of type T.</returns>
        public async Task<ResourceResponse<Document>> UpdateDocumentAsync(T entity)
        {
            var doc = GetDocument(entity.Id);

            return await Client.ReplaceDocumentAsync(UriFactory.CreateDocumentUri(_dbName, _collectionName, entity.Id), entity);
        }

        /// <summary>
        /// Delete a document.
        /// </summary>
        /// <param name="id">The string id of the document to delete.</param>
        /// <returns>A Task result.</returns>
        public async Task<ResourceResponse<Document>> DeleteDocumentAsync(string id)
        {
            var doc = GetDocument(id);

            return await Client.DeleteDocumentAsync(UriFactory.CreateDocumentUri(_dbName, _collectionName, id));
        }

        #endregion

        #region Private Methods

        /// <summary>
        /// Create or retrieves the database to the Client.
        /// </summary>
        /// <returns></returns>
        private async Task CreateDatabaseIfNotExistsAsync()
        {
            try
            {
                await Client.ReadDatabaseAsync(UriFactory.CreateDatabaseUri(_dbName));
            }
            catch (DocumentClientException e)
            {
                if (e.StatusCode == System.Net.HttpStatusCode.NotFound)
                {
                    await Client.CreateDatabaseAsync(new Database { Id = _dbName });
                }
                else
                {
                    throw;
                }
            }
        }

        /// <summary>
        /// Creates or retrieves the collection for the database.
        /// </summary>
        /// <returns></returns>
        private async Task CreateCollectionIfNotExistsAsync()
        {
            try
            {
                await Client.ReadDocumentCollectionAsync(UriFactory.CreateDocumentCollectionUri(_dbName, _collectionName));
            }
            catch (DocumentClientException e)
            {
                if (e.StatusCode == System.Net.HttpStatusCode.NotFound)
                {
                    await Client.CreateDocumentCollectionAsync(
                        UriFactory.CreateDatabaseUri(_dbName),
                        new DocumentCollection { Id = _collectionName },
                        new RequestOptions { OfferThroughput = 1000 });
                }
                else
                {
                    throw;
                }
            }
        }

        /// <summary>
        /// Helper method to get the document for updates and deletes.
        /// </summary>
        /// <param name="id">The string Id of the document to retrieve.</param>
        /// <returns></returns>
        private Document GetDocument(string id)
        {
            var doc = Client.CreateDocumentQuery<Document>(UriFactory.CreateDocumentCollectionUri(_dbName, _collectionName))
                            .Where(d => d.Id == id)
                            .AsEnumerable()
                            .FirstOrDefault();
            return doc;
        }

        #endregion
        
    }
}
