import Firebase from 'firebase';

import keepInSync from './keep-in-sync';
import update from './update';
import set from './set';

import error from '../../shared/errorMessages';

// Model is the base class for all other classes.
class Model {
    constructor (input) {
        if (!input || !input.firebaseUrl) {
            throw new Error(error.input.required);
        }

        // Unique endpoint of each model that is synced to Firebase.
        this.firebaseUrl = input.firebaseUrl;

        // Update data from game to Firebase.
        this.update = update;

        // Set data from game to Firebase.
        this.set = set;

        // Listen for data changes from Firebase to game.
        this.keepInSync = keepInSync;
        this.keepInSync();

        return this;
    }
}

module.exports = Model;
