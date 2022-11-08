import { Router } from '@angular/router';
import { DataService } from './../../data-servicee/data.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  [x: string]: any;

  detail: boolean = false;
  datafilter: any = '';
  constructor(private dataservice: DataService, private router: Router) { }
  datalist: any[] = this.dataservice.data;
  ngOnInit(): void {
    this.datalist = this.dataservice.data;
  }
  onDetail() {
    this.detail = !this.detail;
  }
  test: string = "hello";

  edit(param: any) {
    this.router.navigate(['edit/' + param])
  }

}
