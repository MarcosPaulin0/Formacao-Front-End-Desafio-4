"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
var profiles_js_1 = require("./profiles.js");
var Login = /** @class */ (function () {
    function Login(_idLogin, _password, _cpf, profiles) {
        if (profiles === void 0) { profiles = new profiles_js_1.Profiles(); }
        this._idLogin = _idLogin;
        this._password = _password;
        this._cpf = _cpf;
        this.profiles = profiles;
    }
    Object.defineProperty(Login.prototype, "login", {
        get: function () {
            return this._idLogin;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Login.prototype, "cpf", {
        get: function () {
            return this._cpf;
        },
        enumerable: false,
        configurable: true
    });
    return Login;
}());
exports.Login = Login;
var login1 = new Login("marcos", "abc1234", 23940823983);
console.log(login1);
