// Model pour les cartes des kittens
export class Kitten {
    name: string
    race: string
    birthday: string
    picture: string

    constructor(name: string, race: string, birthday:string, picture: string){
        this.name = name
        this.race = race
        this.birthday = birthday
        this.picture = picture
    }
}