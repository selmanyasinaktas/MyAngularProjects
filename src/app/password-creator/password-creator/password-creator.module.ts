import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { PasswordCreatorComponent } from './password-creator.component';



@NgModule({
  declarations: [PasswordCreatorComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule
  ],
  exports:[
    PasswordCreatorComponent
  ]
})
export class PasswordCreatorModule { }
