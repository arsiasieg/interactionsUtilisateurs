import { Component, EventEmitter, Output} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Kitten } from '../shared/model/kitten.model';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css']
})
export class CreateKittenComponent  {
  isKittenAdd: boolean

  //Valeurs des inputs du formulaire de création du chaton
  kittenForm = this.fb.group({
    nameKitten : ["", Validators.required],
    raceKitten : ["", Validators.required],
    birthdayKitten : ["", Validators.required],
    pictureKitten : ["", Validators.required],
  })

  @Output() emitNewKitten: EventEmitter<Kitten> = new EventEmitter<Kitten>()


  constructor(private fb: FormBuilder){

    this.isKittenAdd = false
  }

  //Initialisation des informations du nouveau chaton dans l'output
  createNewKitten(){
    this.emitNewKitten.emit(new Kitten(
      this.kittenForm.controls.nameKitten.value,
      this.kittenForm.controls.raceKitten.value,
      this.kittenForm.controls.birthdayKitten.value,
      this.kittenForm.controls.pictureKitten.value))
      console.log(this.emitNewKitten)
    this.kittenForm.reset
    this.isKittenAdd = true;
  }
}
