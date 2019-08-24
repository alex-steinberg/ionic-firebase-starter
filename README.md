# Ionic 4 Angular with Firebase back-end starter app

A starter project which will form the base of most of my app prototypes. It 
was seeded from the Ionic [sidemenu starter app](https://github.com/ionic-team/starters/tree/master/ionic-angular/official/sidemenu)
and has been layered with AngularFire with basic e-mail and password auth wired up (only a 
Firebase project is required).

## The Stack

Ionic + Angular + Firebase is a mobile stack that offers unparalleled ease-of-use and power.
When considering a mobile app stack, this has to be the starting point. The technologies have
in common wide use as a mobile stack, crystal clear and example-rich documentation, years of
history with commensurate stability, 3rd party libraries, Stack Overflow posts and active communities.

## Good, Simple Practices

I endeavour to bake in best practices for Angular development suited to small-scale apps, bearing 
in mind the reality that small prototypes can quickly become large applications (see what I did there?) 
so best practices need to be followed from the start. NgRx is not used because it is not suitable 
to rapid prototyping, but I've taken a lot of inspiration from functional paradigms in how state is managed
in the services, hopefully achieving the best of both worlds.

## Get Started

Clone the repo and `cd` into it.

    git clone git@github.com:angular/this-project.git yourUnicornAppName
    
    cd yourUnicornAppName
    
### Firebase

Create a new project on Firebase. When prompted, create a new web app to associate with the project.

Copy the `firebaseConfig` object. This can also be retrieved [here](https://console.firebase.google.com/u/0/project/sars-trip-logger/settings/general/web) once your project is created.
It looks like this:

```javascript
    var firebaseConfig = {
        apiKey: "AIzaSyDUq_PHcnzDdry2evIhnaB0bVuVgWLvRUI",
        authDomain: "<project-name>.firebaseapp.com",
        databaseURL: "https://<project-name>.firebaseio.com",
        projectId: "<project-name>",
        storageBucket: "",
        messagingSenderId: "968233898865",
        appId: "1:968233898865:web:dc2f04a07b086bac"
    };
```

In your app project, go to `src/environments/environments.ts` and replace the empty object with
the `firebaseConfig` object from your new Firebase project.

### Ionic

Install dependencies and then run the dev server.

    npm install
    
    ionic serve
    
Go to http://localhost:8100 that was opened in your default browser.

Start building your new unicorn app -- but remember, business become unicorns, not apps!

# Resources

- [Ionic docs](https://ionicframework.com/docs/)

- [Angular docs](https://angular.io/docs)

- [AngularFire docs](https://github.com/angular/angularfire2)

- [Jorge Vergara](https://javebratt.com/article/ionic-angular/)
