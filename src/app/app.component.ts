import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //injecter le service userService
  constructor(private us: UserService){

  }

  title = 'Interpolation';
  val1="Property Binding";
  chaine1= "first";
  chaine2= "vvvv";
    test(ch:string){
      alert("eventbinding"+ch)
    }
    getVal(x:string){
      this.chaine1;
    }
}
