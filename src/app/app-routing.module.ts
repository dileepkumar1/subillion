import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ForgetpasswordComponent } from './auth/forgetpassword/forgetpassword.component';
import { ListViewComponent } from './list-view/list-view.component';
import { PollDetailsComponent } from './poll-details/poll-details.component';


const routes: Routes = [
  { path: 'home', component: DashboardComponent,
  children:[
    {path:'', redirectTo:'dashboard', pathMatch:'full'},
    { path: 'dashboard', component: ListViewComponent },
    { path: 'poll-details', component:PollDetailsComponent}, 
    { path: 'login', component: LoginComponent },
    { path: 'forget-password',component: ForgetpasswordComponent  },
    { path: 'signup',component: SignupComponent },
    // {path:'**', redirectTo:'dashboard', pathMatch:'full'},
   

   ]
  },
  
  { path: '',   redirectTo: '/home/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo:'/home/dashboard' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
