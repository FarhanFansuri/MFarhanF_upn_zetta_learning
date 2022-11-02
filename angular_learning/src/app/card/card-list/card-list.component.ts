import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
  providers: [DataService]
})
export class CardListComponent implements OnInit {

  constructor(private data_service: DataService) { }
  data: {
    idMakanan: number,
    imgMakanan: string,
    namaMakanan: string,
    hargaMakanan: number,
    deskripsiMakanan: string
  }[] = this.data_service.data;
  ngOnInit(): void {
  }

}
