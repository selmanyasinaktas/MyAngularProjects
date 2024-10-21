import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetterMatchingComponent } from './letter-matching.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../app-routing.module';




@NgModule({
  declarations: [
    LetterMatchingComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    LetterMatchingComponent
  ]
})
export class LetterMatchingModule { }
