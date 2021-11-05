import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Kitten } from '../shared/model/kitten.model';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.css']
})
export class UserKittenComponent implements OnInit {

  @Input() favoriteKittenList: Kitten[]|undefined

  constructor(){
  }

  ngOnInit(){
  }


}
