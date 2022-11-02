import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.css'],
  providers:[OrderService]
})
export class ListOrderComponent implements OnInit {

  constructor(private order_service:OrderService) { }

  ngOnInit(): void {
  }
sate:number=this.order_service.jumlah.sate;




}
