import { DataService } from './../../data-servicee/data.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ThisReceiver } from '@angular/compiler';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private dataservice: DataService, private router: Router) { }
  profileForm = this.formBuilder.group({
    IdNumber: new FormControl(null),
    Name: new FormControl(null, Validators.pattern("^[A-Z, a-z]*$")),
    Age: new FormControl(null, [Validators.required,
    Validators.pattern("^[0-9]*$"),
    Validators.min(11),]),
    Gender: new FormControl(null),
    Email: new FormControl(null, Validators.email),
    Position: new FormControl(null),
    MaritalStatus: new FormControl(null),
    AddressData: new FormArray([])
  })

  data: any[] = [];
  status: any;
  addData: any = (<FormArray>this.profileForm.get('AddressData')).controls
  ngOnInit(): void {
    this.data = this.dataservice.data
    this.profileForm.statusChanges.subscribe((change) => {
      this.status = change
      console.log(this.status)
    })
  }
  kirim() {
    if (this.status == "INVALID") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Data tidak Valid'
      })
    } else {
      Swal.fire(
        'Good job!',
        'success'
      )
      setTimeout(() => {
        this.dataservice.addData(this.profileForm.value);
        this.router.navigate(['']);
      }, 3000)
    }
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
