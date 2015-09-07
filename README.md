# Web-APP-Polymer-Base
Complete Web-App scaffolding based in [Polymer Starter Kit](https://developers.google.com/web/tools/polymer-starter-kit/index?hl=en).
You can use it to create a WebAPP prototype.

you can check a Demo in [polymer-prototype.firebaseapp.com](https://polymer-prototype.firebaseapp.com)

The idea is create a set of tools, using Polymer (web components), to help entrepreneurs to create MVP. 

## You have the next features:
* Multilanguage
* Easy to setup (logos, background images, colors)
* Easy Expand, you only need to understand Web Components to add new modules/features
* Mobile First ( you can create a APP that you can run in several platforms from the first moment)
* OffLine Function ( you can use the WebApp in offline same that the native Apps)
* Cordova compatible ( we wil create a several web component to improve cordava/hybrid compatibility )
* Fast Backend integration, in this moment the App is created using FireBase as a Backend, but you can integrate other solution.

## Demo version
[polymer-prototype.firebaseapp.com](https://polymer-prototype.firebaseapp.com)

* you can make Login and Register an user directly or using Oath with Twitter.
* The Web App demo has two modules, News Reader and Chat.
* You can use or modify this molules
* If you find any bug, you can write us.

## Files Schema

* App file : /elements/app-main.html
* Config file   : /elements/app-config.html
* Language file : /elements/app-Language.html
* Routing File  : /elements/routing.html
* Pages : /elements/pages/
* Layout: /elements/layout/
* Helpers: /elements/helpers/

* Backend FireBase connection: /elements/helpers/app-server-behavior.html
> https://www.firebase.com/docs/web/quickstart.html

##theming:

* custom APP theme: /elements/app-main.ccs
* general App theme: /style/app-theme.html

## manifest to use as a WebAPP

* manifestIOS // it's necesary update it.
* manifest.json

## TODO:

* Complete the Cordova integration
* Improve the Desktop appearance
* Look for a better solution to IOS offline
* Create a Gulp task to automate deploy tasks 
* Refine Polymer Web-components
* Create Several modules to integrate with other BAAS.
