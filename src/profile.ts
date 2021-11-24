import { Favorites } from "./favorites.js";
import { Movie } from "./movie.js";


export class Profile{

    constructor(
        public profileName: string, 
        public profileAge: number,
        public favorites: Movie[] = []
        ){}

    get name():string{
        return this.profileName;
    }

    get age():number{
        return this.profileAge;
    }

    
}