"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
var Movie = /** @class */ (function () {
    function Movie(_idMovie, title, year, genre) {
        this._idMovie = _idMovie;
        this.title = title;
        this.year = year;
        this.genre = genre;
    }
    Object.defineProperty(Movie.prototype, "idMovie", {
        get: function () {
            return this._idMovie;
        },
        set: function (_idMovie) {
            this._idMovie = this.idMovie;
        },
        enumerable: false,
        configurable: true
    });
    return Movie;
}());
exports.Movie = Movie;
