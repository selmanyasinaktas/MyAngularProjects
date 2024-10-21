import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ToolbarComponent } from './toolbar.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  exports:[
    ToolbarComponent
  ]
})
export class ToolbarModule { }
