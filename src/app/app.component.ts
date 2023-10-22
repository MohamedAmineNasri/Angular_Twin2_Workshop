import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
