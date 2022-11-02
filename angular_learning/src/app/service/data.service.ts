import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: {
    idMakanan: number,
    imgMakanan: string,
    namaMakanan: string,
    hargaMakanan: number,
    deskripsiMakanan: string
  }[] = [
      {
        idMakanan: 1,
        imgMakanan: "../../../assets/sate.jpeg",
        namaMakanan: "sate",
        hargaMakanan: 20000,
        deskripsiMakanan: "Makanan yang terdiri dari daging dengan saos khas"
      },
      {
        idMakanan: 2,
        imgMakanan: "../../../assets/soto.jpeg",
        namaMakanan: "soto",
        hargaMakanan: 10000,
        deskripsiMakanan: "Makanan berkuah yang cocok dimakan saat hujan"
      },
      {
        idMakanan: 3,
        imgMakanan: "../../../assets/ayam-bakar.jpeg",
        namaMakanan: "ayam bakar",
        hargaMakanan: 15000,
        deskripsiMakanan: "Makanan yang terdiri dari ayam enak dan dibakar"
      },
      {
        idMakanan: 4,
        imgMakanan: "../../../assets/ayam-geprek.jpeg",
        namaMakanan: "ayam geprek",
        hargaMakanan: 12000,
        deskripsiMakanan: "Makanan yang terdiri dari ayam dan digeprek"
      }
    ];
  constructor() { }
}
