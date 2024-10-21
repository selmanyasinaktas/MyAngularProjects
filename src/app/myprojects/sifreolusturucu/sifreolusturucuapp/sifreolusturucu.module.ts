import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

import { SifreolusturucuComponent } from './sifreolusturucu.component';





@NgModule({
  declarations: [SifreolusturucuComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule
  ],
  exports:[
    SifreolusturucuComponent
  ]
})
export class SifreolusturucuModule { }
