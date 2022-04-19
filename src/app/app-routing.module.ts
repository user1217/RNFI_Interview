import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { VerifyotpComponent } from './verifyotp/verifyotp.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyFormComponent } from './my-form/my-form.component';
import { AuthGuardService } from './auth-guard.service';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'verifyOtp', component: VerifyotpComponent,canActivate: [AuthGuardService]},
  { path: 'dashboard', component: DashboardComponent,canActivate: [AuthGuardService]},
  { path: 'myform', component: MyFormComponent,canActivate: [AuthGuardService]},
  { path: '**', component: LoginComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
