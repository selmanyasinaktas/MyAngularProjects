import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
 
})
export class AppComponent {
  title = 'AngularProject';
  @ViewChild('sidenav') sidenav!: MatSidenav;
  

  toggleSidenav() {
    this.sidenav.toggle();
  }
  
}
