import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './login/login.module';
import { CardModule } from './card/card.module';
import { SidenavModule } from './sidenav/sidenav.module';
import { ToolbarModule } from './toolbar/toolbar.module';
import { SifreolusturucuModule } from './myprojects/sifreolusturucu/sifreolusturucuapp/sifreolusturucu.module';
import { PasswordCreatorModule } from './password-creator/password-creator/password-creator.module';
import { LetterMatchingModule } from './letter-matching/letter-matching/letter-matching.module';






@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    CardModule,
    SidenavModule,
    ToolbarModule,
    SifreolusturucuModule,
    PasswordCreatorModule,
    LetterMatchingModule

    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
