import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges,OnInit{
  nama  = "Nezuko Kamado";
  color = "black";
  berubah = false;
  deskripsi="Some quick example text to build on the card title and make up the bulk of the card's content.";
ngOnInit(): void {

console.log("hello World")
}
  ngOnChanges(changes: SimpleChanges): void {

    console.log("berubah");
  }
change_value(){
this.berubah=true;
}
change_color(warna:string){
  this.color=warna;
}
}
