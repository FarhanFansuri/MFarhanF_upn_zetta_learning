import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListOrderComponent } from './list_order/list-order/list-order.component';
import { CardOrderComponent } from './order/card-order/card-order.component';

@NgModule({
  declarations: [
    AppComponent,
    ListOrderComponent,
    CardOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
