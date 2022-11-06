import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  data: any[] = [];

  addData(parameter: any) {
    this.data.push(parameter);
  }

  changeData(param: any) {
    for (let index = 0; index < this.data.length; index++) {
      if (this.data[index].IdNumber == param.IdNumber) {
        this.data[index].IdNumber = param.IdNumber,
          this.data[index].Name = param.Name,
          this.data[index].Age = param.Age,
          this.data[index].Gender = param.Gender,
          this.data[index].Email = param.Email,
          this.data[index].Position = param.Position,
          this.data[index].MaritalStatus = param.MaritalStatus,
          this.data[index].AddressData.Address = param.Address.AddressData.Address,
          this.data[index].AddressData.ZipCode = param.AddressData.ZipCode,
          this.data[index].AddressData.City = param.AddressData.City,
          this.data[index].AddressData.Country = param.AddressData.Country
      }
    }
  }
}
