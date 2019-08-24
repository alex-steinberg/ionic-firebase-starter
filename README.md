# Ionic 4 Angular with Firebase back-end starter app

A starter project which will form the base of most of my app prototypes. It 
was seeded from the Ionic [sidemenu starter app](https://github.com/ionic-team/starters/tree/master/ionic-angular/official/sidemenu)
and has been layered with AngularFire with basic e-mail and password auth wired up (only a 
Firebase project is required).

## The Stack

Ionic + Angular + Firebase is a mobile stack that offers unparalleled ease-of-use and power.
When considering a mobile app stack, this has to be the starting point of deliberations. The technologies have
in common wide use as a mobile stack, crystal clear and example-rich documentation, years of
history with commensurate stability, 3rd-party libraries, Stack Overflow posts and active communities.

Cypress replaces Protractor/Selenium as the end-to-end testing framework.

## Good, Simple Practices

While building the [PayProp Owner App](https://apps.apple.com/za/app/payprop/id1228082863) over the last two years as a one-man mobile dev team, I have constantly sought patterns and practices that would set the team up for success when growth happens, all the while maintaining a high pace of development and delivery to meet business objectives. The result is, hopefully, a set of Angular development patterns that is performant, maintainable and safe.

The state management pattern is inspired by Thomas Burleson's "Facades" talk at [ngConf 2019](https://www.youtube.com/watch?v=h-F5uYM69a4).

Functional programming paradigms such as immutability and pure functions are used wherever possible.

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
        apiKey: "AIzaSyDUq_PHcnzDdry2evIhna5K7VuVgWLvRUI",
        authDomain: "<project-name>.firebaseapp.com",
        databaseURL: "https://<project-name>.firebaseio.com",
        projectId: "<project-name>",
        storageBucket: "",
        messagingSenderId: "968233898865",
        appId: "1:968233898865:web:dc2f0a45kb086bac"
    };
```

In your app project, go to `src/environments/environments.ts` and replace the empty object with
the `firebaseConfig` object from your new Firebase project.

### Ionic

Install dependencies and then run the dev server.

    npm install
    
Go to http://localhost:8100 that was opened in your default browser.

Start building your new unicorn app -- but remember, business become unicorns, not apps!

# Usage

To run the dev server:

    ionic serve

To run end-to-end tests with Cypress (with the dev server running)

    npm run cypress:run

or

    npm run cypress:open

# Resources

- [Ionic docs](https://ionicframework.com/docs/)

- [Angular docs](https://angular.io/docs)

- [AngularFire docs](https://github.com/angular/angularfire2)

- [Jorge Vergara](https://javebratt.com/article/ionic-angular/)
