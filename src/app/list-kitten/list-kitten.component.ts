import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Kitten } from '../shared/model/kitten.model';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css']
})
export class ListKittenComponent  {
  listKitten: Kitten[]
  adoptKitten: Kitten[]

  constructor(){
    this.listKitten = [new Kitten("Muta", "Européen", "2019-08-15", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTw8bsrRJOtb1iYgZMUxwPQbMK5lW0dDBhlg&usqp=CAU")]
    this.adoptKitten = []
  }

  //Ajoute le chaton avec ses informations (provenance : create-kitten.component) aux tableaux de chatons
  addNewKitten(kitten: Kitten){
    this.listKitten.push(kitten)
  }

  //En cliquant sur adopter, le chaton sélectionné est supprimé de la liste et ajouter aux favoris de l'utilisateur
  addKittenOnFavorite(newKitten: Kitten){
    this.adoptKitten.push(newKitten)
    for(let i=0; i < this.listKitten.length; i++){
      if (this.listKitten[i] == newKitten){
        this.listKitten.splice(i, 1)
      }
    }
  }
}
