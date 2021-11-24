"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var profile_js_1 = require("./profile.js");
var profiles_js_1 = require("./profiles.js");
var User = /** @class */ (function () {
    function User(_idLogin, _password, _cpf, profiles) {
        if (profiles === void 0) { profiles = new profiles_js_1.ProfileUsers(); }
        this._idLogin = _idLogin;
        this._password = _password;
        this._cpf = _cpf;
        this.profiles = profiles;
    }
    Object.defineProperty(User.prototype, "login", {
        get: function () {
            return this._idLogin;
        },
        set: function (_idLogin) {
            this._idLogin = this.login;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (_password) {
            this._password = this.password;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.add = function () {
        var profile = this.createProfile("marcos", 34, []);
        this.profiles.add(profile);
        console.log(this.profiles.list());
    };
    User.prototype.createProfile = function (profileName, profileAge, favorites) {
        return new profile_js_1.Profile(profileName, profileAge, favorites);
    };
    return User;
}());
exports.User = User;
