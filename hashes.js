'use strict';

class Hashes {
    static check(hash) {
        const voter_hashes = [
        ];
        const nominee_hashes = [
        ];
        return [(voter_hashes.indexOf(hash) != -1), (nominee_hashes.indexOf(hash) != -1)];
    }
}
if (typeof module != 'undefined' && module.exports) module.exports = Hashes;
