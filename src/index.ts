import { User } from "./user.js";
import { Favorites } from "./favorites.js";
import { Profile } from "./profile.js";
import { ProfileUsers } from "./profiles.js";
import { Movie } from "./movie.js";

const login1 = new User("marcos", "abc1234", 23940823983);
console.log(login1)


const profile1 = new Profile("marcos",34, []);
console.log(profile1);

const profile2 = new Profile("josé",17, [])
console.log(profile2)

const profile3 = new Profile("maria",22, [])
console.log(profile3)

const filme1 = new Movie(233, "Star Wars", 2018, "drama");
const filme2 = new Movie(236, "Petz", 2014, "comedy");
const filme3 = new Movie(293, "The Godfather", 1992, "drama");
const filme4 = new Movie(302, "True Lies", 2018, "action");

console.log(filme1, filme2, filme3, filme4)

