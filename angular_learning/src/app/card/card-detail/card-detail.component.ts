import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css'],
  providers: [DataService]
})
export class CardDetailComponent implements OnInit {
  foodid: any;
  foodinfo: any;
  constructor(private activated_route: ActivatedRoute, private data_service: DataService) { }

  ngOnInit(): void {
    this.foodid = this.activated_route.snapshot.paramMap.get('id');
    this.foodinfo = this.data_service.data.find(x => x.idMakanan == this.foodid)
  }

}
