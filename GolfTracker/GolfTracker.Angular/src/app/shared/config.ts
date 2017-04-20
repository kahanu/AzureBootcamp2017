// Set the endpoints for your data stores
export let CONFIG = {
    baseUrl: {
        //Services in Azure
        DocumentDB_AzureService_King: 'https://golftrackerserviceswebapinosql20170412085240.azurewebsites.net/',
        DocumentDB_AzureService: 'https://golftrackerserviceswebapinosql.azurewebsites.net/',
        SqlServer_AzureService: 'https://golftrackerserviceswebapi.azurewebsites.net/',
        TableStorage_AzureService: 'https://??/',

        //Services on Jeff's machine
        MongoDB_JeffLocalService: 'http://localhost:????/',
        DocumentDB_JeffLocalService: 'http://localhost:32768/',
        SqlServer_JeffLocalService: 'http://localhost:32768/',

        //Services on Yeager's machine
        MongoDB_YeagerLocalService: 'http://localhost:????/',
        DocumentDB_YeagerLocalService: 'http://localhost:56994/',
        SqlServer_YeagerLocalService: 'http://localhost:32769/',

        //Services on King's machine
        MongoDB_KingLocalService: 'http://localhost:????/',
        DocumentDB_KingLocalService: 'http://localhost:56994/',
        SqlServer_KingLocalService: 'http://localhost:58223/'
    }
};

export let ENDPOINT = CONFIG.baseUrl.DocumentDB_AzureService_King;
