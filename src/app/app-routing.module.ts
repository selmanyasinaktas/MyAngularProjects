import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CardComponent } from './card/card.component';
import { SifreolusturucuComponent } from './myprojects/sifreolusturucu/sifreolusturucuapp/sifreolusturucu.component';
import { PasswordCreatorComponent } from './password-creator/password-creator/password-creator.component';
import { LetterMatchingComponent } from './letter-matching/letter-matching/letter-matching.component';

const routes: Routes = [
  
  { path: 'login', component: LoginComponent },
  { path: 'card', component: CardComponent },
  { path: 'passwordcreator', component: PasswordCreatorComponent },
  { path: 'lettermatching', component: LetterMatchingComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
