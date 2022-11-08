import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSelectModule } from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddComponent } from './add-profile/add/add.component';
import { EditComponent } from './edit-profile/edit/edit.component';
import { ListComponent } from './list-profile/list/list.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule, FloatLabelType } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DataService } from './data-servicee/data.service';
import { MatRadioModule } from '@angular/material/radio';
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    EditComponent,
    ListComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatRadioModule


  ],
  providers: [DataService],
  bootstrap: [AppComponent],

})
export class AppModule { }
