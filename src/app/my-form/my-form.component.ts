import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from "./user";

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent {
  // get element by id 
  // cherche un id myForm pour remplir le myForm ici
  @ViewChild('myForm')
  myForm!: NgForm;
  onSubmit(): void {
    console.log(this.model)
    this.myForm.resetForm()
  }
  model: User = new User("", "", "", "");
}
