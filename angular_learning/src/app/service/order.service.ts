import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

jumlah:{sate:number,soto:number,esjeruk:number,esteh:number} = {sate:0,soto:0,esjeruk:0,esteh:0};
  addSate() {
    this.jumlah.sate + 1;
  }
  addSoto() {
    this.jumlah.soto + 1;
  }
  addEsjeruk() {
    this.jumlah.esjeruk + 1;
  }
  addEsteh() {
    this.jumlah.esteh + 1;
  }

}
