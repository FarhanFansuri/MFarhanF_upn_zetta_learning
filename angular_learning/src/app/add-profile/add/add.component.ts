import { DataService } from './../../data-servicee/data.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ThisReceiver } from '@angular/compiler';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private dataservice: DataService, private router: Router) { }
  profileForm = this.formBuilder.group({
    IdNumber: new FormControl(null),
    Name: new FormControl(null),
    Age: new FormControl(null),
    Gender: new FormControl(null),
    Email: new FormControl(null),
    Position: new FormControl(null),
    MaritalStatus: new FormControl(null),
    AddressData: new FormArray([])
  })

  data: any[] = [];
  addData: any = (<FormArray>this.profileForm.get('AddressData')).controls
  ngOnInit(): void {
    this.data = this.dataservice.data
  }
  kirim() {
    this.dataservice.addData(this.profileForm.value);
    this.router.navigate(['']);
  }

  addAddress() {
    (<FormArray>this.profileForm.get('AddressData')).push(new FormGroup({
      Address: new FormControl(null),
      ZipCode: new FormControl(null),
      City: new FormControl(null),
      Country: new FormControl(null)
    }))
  }

}
