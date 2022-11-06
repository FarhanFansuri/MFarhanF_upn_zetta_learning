import { EditComponent } from './edit-profile/edit/edit.component';
import { ListComponent } from './list-profile/list/list.component';
import { AddComponent } from './add-profile/add/add.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'add', component: AddComponent },
  { path: '', component: ListComponent },
  { path: 'edit/:id', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
