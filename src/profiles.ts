import { Profile } from "./profile.js";

export class ProfileUsers{
    readonly profiles: Profile[] = [];

    add(profile: Profile): void{
        this.profiles.push(profile);
    }

    list():void{
       for (const profile in this.profiles){
           console.log(profile.length)
       }
    }
    removePerfil(profile: Profile, profiles:Array<Profile>) {
        let index = profiles.indexOf(profile)
        profiles.splice(index);
    }
}

