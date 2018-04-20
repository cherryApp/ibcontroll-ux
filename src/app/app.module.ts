import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './page/home/home.component';
import { RegisterComponent } from './page/register/register.component';
import { FormElementComponent } from './element/form-element/form-element.component';
import { FormSelectComponent } from './element/form-select/form-select.component';

const routing: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    // 404 redirect.
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    FormElementComponent,
    FormSelectComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routing),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
