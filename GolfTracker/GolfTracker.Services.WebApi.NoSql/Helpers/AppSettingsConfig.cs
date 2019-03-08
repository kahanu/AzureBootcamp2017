namespace GolfTracker.Services.WebApi.NoSql.Helpers
{
    public static class AppSettingsConfig
    {
        /// <summary>
        /// The name of the DocumentDB database.
        /// </summary>
        //public static string Db { get { return "golftracker2"; } }
        public static string Db { get { return "golftrackerdemodb"; } }

        /// <summary>
        /// The DocumentDB collection (name) for storing main set of documents.
        /// You can add additional settings using this template to pass them into new custom repositories.
        /// Simply add the corresponding field to the web.config or update in the Azure Portal's app settings.
        /// Alternatively, if you want to specify a collection name directly in the repository, you can do that by
        /// passing the string directly in quotes.
        /// </summary>
        //public static string MainCollection { get { return "golftracker2"; } }
        public static string MainCollection { get { return "golftrackerdemocollection"; } }

        /// <summary>
        /// The DocumentDB endpoint Uri.
        /// </summary>
        //public static string EndPoint { get { return "https://golftracker2.documents.azure.com:443/"; } }
        //public static string EndPoint { get { return "https://golftrackerdemo.documents.azure.com:443/"; } }
        public static string EndPoint { get { return "https://localhost:8081/"; } }  //local emulator

        /// <summary>
        /// The DocumentDB authorization key.
        /// </summary>
        //public static string AuthKey { get { return "2kN1FRqIbZeDlvhjCtSr7YjrabV01dgHE60oQo4hkOAIWGcklCpm2YZas0SDowf5y5mpBYy0khdLyk61772QAQ=="; } }
        public static string AuthKey { get { return "C2y6yDjf5/R+ob0N8A7Cgv30VRDJIWEHLM+4QDU5DE2nQ9nDuVTqobD4b8mGGyPMbIZnqyMsEcaGQy67XIw/Jw=="; } } //local emulator (all local emulators use the same key)
        //public static string AuthKey { get { return "559p46bHxqUsje3LUUXL8dQiJOqdjDJtc3wXVMMtsFvhh5IVTF5A430hJBXJeAgFcaVS1gODf0NVmor80MTZow=="; } } // King's Demo DB
    }
}
