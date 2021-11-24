"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Midia = void 0;
var Midia = /** @class */ (function () {
    function Midia(_idMidia, title, year, genre) {
        this._idMidia = _idMidia;
        this.title = title;
        this.year = year;
        this.genre = genre;
    }
    Object.defineProperty(Midia.prototype, "idMidia", {
        get: function () {
            return this._idMidia;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Midia.prototype, "nameT", {
        get: function () {
            return this.title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Midia.prototype, "launch", {
        get: function () {
            return this.year;
        },
        enumerable: false,
        configurable: true
    });
    return Midia;
}());
exports.Midia = Midia;
