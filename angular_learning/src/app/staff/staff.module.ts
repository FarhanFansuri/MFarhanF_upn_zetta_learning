import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { PengumumanComponent } from './pengumuman/pengumuman.component';



@NgModule({
  declarations: [
    LoginComponent,
    AboutComponent,
    PengumumanComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StaffModule { }
