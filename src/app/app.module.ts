import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentFormComponent } from './student/student-form/student-form.component';
import { GradoviListComponent } from './grad/gradovi-list/gradovi-list.component';
import { GradService } from './grad/grad.service';
import { StudentService } from './student/student.service';
import { GradFormComponent } from './grad/grad-form/grad-form.component';
import { StudentEditComponent } from './student/student-list/student-edit/student-edit.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentFormComponent,
    GradoviListComponent,
    GradFormComponent,
    StudentEditComponent,
    LoginComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [StudentService, GradService],
  bootstrap: [AppComponent]
})
export class AppModule { }
