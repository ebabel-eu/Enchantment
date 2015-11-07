import Firebase from 'firebase';

import error from '../../shared/errorMessages';

module.exports = {
    get: function (input) {
        const ref = new Firebase('https://enchantment.firebaseio.com');
        const player = input.player;
        const callback = input.callback;

        ref.child('character/' + player.id).once('value', function getCharacter (snapshot) {
            var toReturn = snapshot.val();

            if (callback) {
                callback({
                    player: player,
                    character: toReturn
                });
            }
        });
    }
};
