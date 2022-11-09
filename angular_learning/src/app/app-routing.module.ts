import { ListDataComponent } from './list/list-data/list-data.component';
import { EditDataComponent } from './edit/edit-data/edit-data.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'edit/:id', component: EditDataComponent },
  { path: '', component: ListDataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
