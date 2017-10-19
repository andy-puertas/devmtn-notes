# Structuring an App in react or react-native
### group all related features together and nest them as needed
### the world is your oyster!

/src
    /components
        /ButtonDismiss
            /images
            /locales
            /specs
            /index.js
            /styles.scss
        /index.js
        /styles.scss
    
    /scenes
        /Home
            /components
                /ButtonLike
            /services
                /processData
            /index.js
            /styles.scss
    
        /Sign
            /components
                /FormField
            /scenes
                /Login
                /Register
                    /locales
                    /specs
                    /index.js
                    /styles.scss
    
    /services
        /api
        /geolocation
        /session
            /action.js
            /index.js
            /reducer.js
        /users
            /actions.js
            /api.js
            /reducer.js
    
    index.js
    store.js
        
- Each component, scene or service (a feature) has everything it needs to work on its own
    - styles, images, translations, set of actions, unit or integration tests
    - each feature is like an independent piece of code to be used

# Must follow these rules:
    - a component can define nested components. it cannot use or define scenes 
    - a scene can define nested components, scenes, or services 
    - a service can define nested services. it cannot use or define components or scenes
    - nested features can only use from its parent
        - meaning parent, grandparent, great-grandparents ... just not a cousin

## Components 
- Important that one component can be nested into another
- Defined at the root level of your project
- global, can be used anywhere in the application
- If a component is defined inside of another, the new component is only accessible to its direct parent
### Why?
- Too many components at the root can crowd the folder structure
- Makes it harder to return to the important/main components (buttons, form fields, thumbnails)
    - listComments, formComposer can fall under the parent you know will use them 
### For example...
    /src
        /components
            /Button -- can be used anywhere
                /index.js
            /Notifications -- also can be used anywhere
                /components
                    /ButtonDismiss -- can only be used in Notifications -- can use Button from the root 
                    /index.js
            /actions
            /index.js
            /reducer.js
        
## Scenes 
- a page of your application
- can see a scene just like any component, but they're instead neatly separated into their own folder
- a scene can be nested into another scene 
### For example...
    /src
        /scenes
            /Home
                /components
                    /ButtonShare -- can only be used by the Home component 
                        /index.js
                /index.js
            /Sign
                /components
                    /ButtonHelp -- can be used by Login or Register scenes 
                        /index.js
                /scenes
                    /Login
                        /components
                            /Form
                                /index.js
                            /ButtonFacebookLogin
                                /index.js
                            /index.js
                    /Register
                        /index.js
                    /index.js

## Services 
- Not everything can be a component
- Independent modules need to be made for components or scenes to use
- a service is like a self-contained module where you define the core business logic of your app
- You should create services to manage all api requests
    - view them as a bridge/adapter between the server API and the view layer of your app 
    - takes care of network calls, get and post content, transform payloads before being sent or saved in the store of your app
### For example...
    /src
        /services
            /api
                /services
                    /handleError
                        /index.js
                    /index.js
            /geolocation
            /session
                /actions.js
                /index.js
                /reducer.js