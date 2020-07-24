import { AuthGuardService } from './auth/auth.guard';
import { StudentEditComponent } from './student/student-list/student-edit/student-edit.component';
import { GradFormComponent } from './grad/grad-form/grad-form.component';
import { GradoviListComponent } from './grad/gradovi-list/gradovi-list.component';
import { StudentFormComponent } from './student/student-form/student-form.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  { path: '', redirectTo: 'studenti', pathMatch: 'full'},
  { path: 'studenti', component: StudentListComponent, canActivate: [AuthGuardService], pathMatch: 'full'},
  { path: 'studenti/student-form', component: StudentFormComponent, canActivate: [AuthGuardService], pathMatch: 'full'},
  { path: 'studenti/:id', component: StudentEditComponent, canActivate: [AuthGuardService], pathMatch: 'full' },
  { path: 'gradovi', component: GradoviListComponent, canActivate: [AuthGuardService], pathMatch: 'full'},
  { path: 'gradovi/grad-form', component: GradFormComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
