# AzureBootcamp2017
Files used in the Azure Bootcamp presentation (Los Angeles, CA).

This presentation focused on building an Angular (4) app with an Azure DocumentDB database, accessed via a .Net Core 1.1 WebApi.  Since it's a SPA application, the Angular website is hosted in a different space than the WebApi, so there's a good example of how to implement CORS to make this work.

## GolfTracker
This is a fairly complex Angular app that allows users to manage golf clubs and golfers, and enter and track the scores for golfers.  It's a full CRUD application and demonstrates how to perform fine grain CRUD operations even to deeply nested DocumentDB JSON documents.

## Screenshots
This is the Golf Clubs page of the desktop site.

![alt-text](https://github.com/kahanu/AzureBootcamp2017/blob/master/screenshots/golf-tracker-golf-clubs-desktop.png "Golf Clubs Desktop")
