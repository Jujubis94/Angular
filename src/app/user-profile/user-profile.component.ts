import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
user : User = new User('Doe', 'John' , 25, 'I am a ghost','https://randomuser.me/api/portraits/lego/2.jpg')

  // user = {
  //   name : 'Doe',
  //   firstName : 'John',
  //   age : 25,
  //   quote : 'I am a ghost',
  //   photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  // };

  showAge = false 

  toogleAge() {
    this.showAge = !this.showAge;
  }
}
