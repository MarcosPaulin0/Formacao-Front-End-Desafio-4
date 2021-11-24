"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Favorites = void 0;
var Favorites = /** @class */ (function () {
    function Favorites() {
        this._favorites = [];
    }
    Favorites.prototype.add = function (movie) {
        this._favorites.push(movie);
    };
    Favorites.prototype.list = function () {
        for (var movie in this._favorites) {
            console.log(movie);
        }
    };
    Favorites.prototype.removeFilme = function (movie, _favorites) {
        var index = _favorites.indexOf(movie);
        _favorites.splice(index);
    };
    return Favorites;
}());
exports.Favorites = Favorites;
//const filme1 = new Movie(233, "Star Wars", 2018, "drama");
