import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular_learning';
  image = '../assets/iphone.jpeg';
  public truth = false;
  changeTruth():void{
    this.truth = !this.truth;
    console.log("hello");
  }
}
