import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-card-order',
  templateUrl: './card-order.component.html',
  styleUrls: ['./card-order.component.css'],
  providers:[
  OrderService
  ]
})
export class CardOrderComponent implements OnInit {

  constructor(private order_service:OrderService) {

   }

  addOrderSate(){
    this.order_service.addSate()
  }



  ngOnInit(): void {
  }


}
