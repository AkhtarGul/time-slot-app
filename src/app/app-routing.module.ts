import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeslotListComponent } from './timeslot-list/timeslot-list.component';

const routes: Routes = [

  {
    path:'',component:TimeslotListComponent,pathMatch:'full'
  },
  {
    path:'list-slot',component:TimeslotListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
