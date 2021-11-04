import { Component} from '@angular/core';
import { Kitten } from '../shared/model/kitten.model';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css']
})
export class ListKittenComponent  {
  listKitten : Kitten[]
  adoptKitten : Kitten[]

  constructor(){
    this.listKitten = []
    this.adoptKitten = []
  }

  addKittenOnList(kitten: Kitten){
    this.listKitten.push(kitten)
  }

  addKittenOnUser(newKitten: Kitten){
    this.adoptKitten.push(newKitten)
    for(let i=0; i < this.listKitten.length; i++){
      if (this.listKitten[i] == newKitten){
        this.listKitten.splice(i, 1)
      }
    }
  }
}
