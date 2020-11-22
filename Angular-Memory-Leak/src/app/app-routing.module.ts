import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewRequestComponent } from './components/new-request/new-request.component';
import { NewUserComponent } from './components/new-user/new-user.component';


const routes: Routes = [  {
  path: 'new-User',
  component: NewUserComponent
},
{
  path: 'new-Requests',
  component: NewRequestComponent
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
