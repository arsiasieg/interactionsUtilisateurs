// Model pour les cartes des kittens
export class Kitten {
    name: string
    race: string
    birthday: Date
    picture: string

    constructor(name: string, race: string, birthday:Date, picture: string){
        this.name = name
        this.race = race
        this.birthday = birthday
        this.picture = picture
    }
}