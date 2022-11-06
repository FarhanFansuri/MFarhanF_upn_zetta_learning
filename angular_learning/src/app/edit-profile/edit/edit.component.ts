import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { DataService } from './../../data-servicee/data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormArray, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private activatedroute: ActivatedRoute, private formBuilder: FormBuilder, private dataservice: DataService, private router: Router) { }
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
  id: any;
  data: any;
  addData: any = (<FormArray>this.profileForm.get('AddressData')).controls
  datalist: any[] = this.dataservice.data;
  ngOnInit(): void {
    this.id = this.activatedroute.snapshot.params['id']
    this.data = this.dataservice.data.find(x => x.IdNumber == this.id);
    this.datalist = this.dataservice.data;
    console.log(this.data)
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

  change() {
    this.dataservice.changeData(this.profileForm.value);
    this.router.navigate([''])
  }

}
