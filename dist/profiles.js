"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUsers = void 0;
var ProfileUsers = /** @class */ (function () {
    function ProfileUsers() {
        this.profiles = [];
    }
    ProfileUsers.prototype.add = function (profile) {
        this.profiles.push(profile);
    };
    ProfileUsers.prototype.list = function () {
        for (var profile in this.profiles) {
            console.log(profile.length);
        }
    };
    ProfileUsers.prototype.removePerfil = function (profile, profiles) {
        var index = profiles.indexOf(profile);
        profiles.splice(index);
    };
    return ProfileUsers;
}());
exports.ProfileUsers = ProfileUsers;
