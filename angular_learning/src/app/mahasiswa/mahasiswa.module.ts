import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PengumumanComponent } from './pengumuman/pengumuman.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    PengumumanComponent,
    LoginComponent,
    AboutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MahasiswaModule { }
