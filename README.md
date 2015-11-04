# Enchantment MMO

Enchantment (working title) is a free (for ever) browser based MMO. It's a dark world with evil magic, demons and necromancers battling each other for supremacy. See the [wiki](https://github.com/ebabel-eu/Enchantment/wiki) for further details.

## Installation

```
npm install
bower install
npm install -g http-server
npm install -g webpack
```

## Build the game

```
webpack -w
```

## Start running the game during development

```
http-server public
```

Browse to

  http://localhost:8080

## Deploy to Firebase

Note: you may need to adjust your firebase.json settings with `firebase init` after you have logged in with your own Firebase account. Refer to Firebase for further details.

```
firebase deploy
```

Browse to

  https://enchantment.firebaseapp.com/

## Branching model

Tackle issues organised in the Github issues system.

Create one branch per issue. Name it after the milestone and words from the title.

For example, for issue "Authenticate with Firebase to login with Facebook" due for the "0.4.0" milestone, create a branch named 0.4.0/firebase-facebook-login

When the work is completed, merge back to the develop branch.

When a milestone is completed, increase the version number accordingly and release to Firebase. Create a tag for that release number and document it in this README.

## Features that are already implemented

* Load Collada models and animate them with their own custom heartbeat.

## Versions

### Semantic versioning

See http://semver.org/

* MAJOR version when you make incompatible API breaking changes,
* MINOR version when you add functionality in a backwards-compatible manner, and
* PATCH version when you make backwards-compatible bug fixes.

### Next release tag

0.6.0 Rules of the game documentation and refactoring to match the rules

### Released tags

* 0.5.0 React.js and webpack
* 0.4.0 Migration to Firebase backend.
* 0.3.1 Migration to client side only with Grunt and Bower.
* 0.2.0 Original version from https://github.com/jicksta/Enchantment
