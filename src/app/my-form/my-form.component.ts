import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from "./user";

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent {
  onSubmit(myForm: NgForm): void {
    console.log(this.model)
    myForm.resetForm();
  }
  model: User = new User("", "", "", "");
}
