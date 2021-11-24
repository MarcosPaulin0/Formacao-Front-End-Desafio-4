"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profile = void 0;
var Profile = /** @class */ (function () {
    function Profile(profileName, profileAge, favorites) {
        if (favorites === void 0) { favorites = []; }
        this.profileName = profileName;
        this.profileAge = profileAge;
        this.favorites = favorites;
    }
    Object.defineProperty(Profile.prototype, "name", {
        get: function () {
            return this.profileName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "age", {
        get: function () {
            return this.profileAge;
        },
        enumerable: false,
        configurable: true
    });
    return Profile;
}());
exports.Profile = Profile;
