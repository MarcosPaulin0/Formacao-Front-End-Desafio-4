import { Movie } from "./movie.js";
import { ProfileUsers } from "./profiles.js";

export class Favorites{
    private _favorites: Movie[] = [];

  
    add(movie:Movie){
        this._favorites.push(movie);
        
    }

    list(): void{
        for (const movie in this._favorites){
            console.log(movie)
        }
    }

    removeFilme(movie: Movie,_favorites:Array<Movie>) {
        let index = _favorites.indexOf(movie)
        _favorites.splice(index);
    }
 
}

//const filme1 = new Movie(233, "Star Wars", 2018, "drama");


