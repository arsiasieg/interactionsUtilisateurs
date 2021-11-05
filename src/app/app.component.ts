import { Component } from '@angular/core';
import { Kitten } from './shared/model/kitten.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  adoptKittenParent: Kitten

  constructor(){
    this.title = "Our kittens"
    this.adoptKittenParent = new Kitten("", "","","")
  }

  adoptKitten(kitten:Kitten){
    this.adoptKittenParent = kitten
  }
  
}
