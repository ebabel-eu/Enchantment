# Single player adventure game
Enchantment (working title) is a free (for ever) browser based single player adventure game.

## Installation
```
npm install -g http-server
```

## Start running the game during development
```
http-server src
```

Browse to `http://localhost:8080`

## Versions

### Next release tag
* 2.0.0
- Switched license from MIT to GPL 3.0
- Upgraded three.js from 87 to 91
- Switch to require.js modules
- Remove webpack
- Remove build step
- Remove React.js (just Three.js and plain Javascript)
- Remove Firebase
- Add static starting big square
- Infinite world: when player goes near edges of the origin static area, generate procedurally the areas where he is likely to go to. These procedural areas should then stored in localStorage and read from there next time.

### Released tags
* 1.0.0 remove Facebook integration and let anyone move around virtual environment without any login
* 0.10.1 single player fixes
* 0.10.0 single player
* 0.9.0 refactor data and classes
* 0.8.1 fix the keyboard controls to move within the scene.
* 0.8.0 sprite interaction
* 0.7.0 remove collada and use THREE.js models instead
* 0.6.0 Rules of the game documentation, refactoring to match the rules and ES6 refactoring.
* 0.5.0 React.js and webpack.
* 0.4.0 Migration to Firebase backend.
* 0.3.1 Migration to client side only with Grunt and Bower.
* 0.2.0 Original version from https://github.com/jicksta/Enchantment
