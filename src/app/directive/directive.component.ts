import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
  title: string = 'Bonjour !'

  isAdmin: boolean = true
  showInput : boolean = true

  toggleAdmin() {
    this.isAdmin = !this.isAdmin
  }

  addInput() {
    this.showInput = !this.showInput
  }
  alert() {
  alert('Coucou')
  }
}
