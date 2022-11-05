import { DataService } from './../../data-servicee/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  detail: boolean = false;

  constructor(private dataservice: DataService) { }
  datalist: any[] = this.dataservice.data;
  ngOnInit(): void {
    this.datalist = this.dataservice.data;
  }
  onDetail() {
    this.detail = !this.detail;
  }

}
