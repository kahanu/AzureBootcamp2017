# Angular Starter Kit

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

## Demo Site
[Angular Starter Kit Demo Site](https://kahanu.github.io/AngularStarterKit/)

## What is this?

This can be used as the basis for your new base Angular project.  It follows good Angular conventions in layout and structure for components and modules as suggested by the Angular docs.

This will save you time in creating the `shared` and `core` folders which should be in every Angular app, as described in the [Angular Docs](https://angular.io/guide/ngmodule-faq#what-kinds-of-modules-should-i-have-and-how-should-i-use-them).  It also has an `HttpBase` class in the services folder that provides all the plumbing for the basic CRUD operations with your RESTful service calls.

This project does not contain any additional `npm` packages over the normal packages added by the Angular CLI when creating a new project.

## Run It

After you download it, install the npm packages.  In the folder with the starter kit, open the terminal and enter:

```javascript
npm install
```

Once all the packages have been installed, you can run it.

```javascript
npm start
```

## Project Structure

This is the `app` folder structure:

```javascript
src 
 |- app
     |- about 
          |- about-routing.module.ts
          |- about.component.css
          |- about.component.html
          |- about.component.ts
          |- about.module.ts
     |- core
          |- guards
               |- module-import.guard.ts
          |- services
               |- customer.service.ts
               |- exception.service.ts
          |- core.module.ts
          |- http-base.ts
     |- home 
          |- home-routing.module.ts
          |- home.component.css
          |- home.component.html
          |- home.component.ts
          |- home.module.ts
     |- shared
          |- layout
               |- app-layouts
                   |- main-layout
                       |- main-layout.component.css
                       |- main-layout.component.html
                       |- main-layout.component.ts  
               |- navigation
                   |- primary-nav
                       |- primary-nav.component.css
                       |- primary-nav.component.html
                       |- primary-nav.component.ts
               |- layout.module.ts
          |- models
               |- base.ts
               |- index.ts
          |- shared.module.ts
     |- app-routing.module.ts
     |- app.component.css
     |- app.component.html
     |- app.component.ts
     |- app.module.ts

```

You can add your own application layout by simply creating a new component, and then updating the `app-routing.module.ts`.

## Usage
### Create new application from Starter Kit

The concept here is to clone this repo to you machine to start a new Angular app with these features.  If you already have an existing application that has been in development, and you don't have the "Core" and "Shared" folders in your application, you can simply create the folders and follow the description from the [Angular Docs](https://angular.io/guide/ngmodule-faq#what-kinds-of-modules-should-i-have-and-how-should-i-use-them). 

Otherwise, follow these instructions to start a new Angular app with the Core and Shared folders (and some other features) created.

1. **Get Repo** - download or clone the repo to your local dev machine at the location of your choice
2. **Rename folder** - if you've cloned the repo, you'll have to rename the folder to your project name
3. **Config update** - open the "angular.json" file in the root of the application
4. **Rename Identifier** - you'll see the name 'AngularStarterKit' throughout this file.  Rename them all to the name of your project.
5. **Package.json** - you'll need to rename the 'AngularStarterKit' in this file also. And also change the name property in the json file to your project name in kebab caseing (from MyAngularApp to my-angular-app).
6. **npm install** - now install the npm packages
7. **Run** - run the app with "npm start".  If it works, then this has been successful!  Only one thing left to do.

### Connect to your Repo
1. **Connect to git** - currently if you cloned this repo, it will still be connected to this remote repo.  You need to connect it to your repo.
2. **Check the connection** - open a terminal in this folder then run "git remote -v".  This will return the list of repos connected to this application.
```bash
$ git remote -v
origin https://github.com/kahanu/AngularStarterKit.git (fetch)
origin https://github.com/kahanu/AngularStarterKit.git (push)
```

3. **Change the connection** - to change the connection to your repo, first remove the references to this repo with the following command:
```bash
$ git remote remove origin
```
4. **Confirm removal** - to confirm the repo connection was removed, run the following command, and it should return nothing.
```bash
$ git remote -v
```
5. **Connect to new repo** - now you can connect to the repo of your choice.
```bash
$ git remote add origin <your repo path>
```

That's it!  Your new application is ready to go.

## Concept

This is the basic concept of having a Core and Shared folder in your app.

* **Core** - this contains all the services for your application, including guards and other related services.
* **Shared** - this contains all the shared modules and components that can be used throughout your application.

## Best Practices

There are several things you can do to follow some best practices which will make your life easier when developing Angular apps.

1. **Barrels** - when you have a folder (even with nested folders) that contain many components or other files that might be referenced elsewhere in your application, create a barrel file to list all the files.  This is just an `index.ts` file in the root of that folder that contains references to files in that folder.  This way if you are referencing more than one of those files in another file, you can include them all in the same IMPORT statement which makes your code cleaner and easier to manage.  (See the Shared/Entities folder)

When you have these files that exist in the same base folder:

```javascript
-- models/entities/customer.ts
-- models/response-base.ts
-- models/entity.ts
```
... you can create a barrel file called `index.ts` in the models folder, and include the reference to those files.

```javascript
export * from './entities/customer.ts';
export * from './response-base.ts';
export * from './entity.ts';
```

Now in the file that will reference these other files, you can import them like this:

```javascript
import { Customer, ResponseBase, Entity } from './shared/models';

@Component({
  ...
})
export class CustomerComponent {

}
```


