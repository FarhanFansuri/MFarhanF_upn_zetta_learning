import { DataService } from './../../data-servicee/data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

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
    this.dataservice.changeData(this.profileForm.value);
  }
}
