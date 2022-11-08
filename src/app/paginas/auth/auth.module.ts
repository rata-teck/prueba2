import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthPageRoutingModule } from './auth-routing.module';

import { AuthPage } from './auth.page';

import {DatosService} from './../../servicios/datos.service';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, RouterLink} from '@angular/router';
import { Observable } from 'rxjs';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthPageRoutingModule,
    HttpClientModule,
    RouterLink,
    RouterModule,
    ReactiveFormsModule,
    Observable
  ],
  declarations: [
    AuthPage,
    LoginComponent,
    RegisterComponent
  ],
  providers: [
    DatosService
  ]
})
export class AuthPageModule {}
