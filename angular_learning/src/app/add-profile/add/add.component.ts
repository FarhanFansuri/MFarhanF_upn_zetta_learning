import { DataService } from './../../data-servicee/data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private dataservice: DataService) { }
  profileForm = this.formBuilder.group({
    IdNumber: [''],
    Name: [''],
    Age: [''],
    Gender: [''],
    Email: [''],
    Position: [''],
    MaritalStatus: [''],
    Address: [''],
    ZipCode: [''],
    City: [''],
    Country: ['']
  })

  data: any[] = [];
  ngOnInit(): void {
    this.data = this.dataservice.data
  }
  kirim() {
    this.dataservice.addData(this.profileForm.value);
    console.log(this.data)
  }

}
