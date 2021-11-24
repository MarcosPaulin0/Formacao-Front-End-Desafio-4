type genre = "action" | "drama" |  "comedy" | "animation" | "scifi"

import { Favorites } from "./favorites.js";

export class Movie {
    
    constructor(
        private _idMovie: number,
        public title: string, 
        public year:number,
        public genre: genre
        ){}

         get idMovie():number{
            return this._idMovie;
        }

        set idMovie(_idMovie:number){
          this._idMovie = this.idMovie
        }
       
    
}



