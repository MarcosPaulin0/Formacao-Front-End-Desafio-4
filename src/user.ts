import { Profile } from "./profile.js";
import { ProfileUsers } from "./profiles.js";
import { Movie } from "./movie.js";


export class User{

    constructor(
        private _idLogin: string,
        private _password: string,
        protected _cpf: number,
        private  profiles = new ProfileUsers()
        ){}

        get login(): string{
            return this._idLogin;
        }
        set login(_idLogin:string){
            this._idLogin = this.login;
        }
        
        get password():string{
            return this._password;
        }

        set password(_password:string){
            this._password = this.password;
        }


        add(): void{//alterar 
            const profile = this.createProfile("marcos",34,[]);
            this.profiles.add(profile)
            console.log(this.profiles.list());
        }

       createProfile(profileName: string, profileAge: number, favorites: Movie[]): Profile{
            return new Profile(profileName, profileAge, favorites)
        }
}

