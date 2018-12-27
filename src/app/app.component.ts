import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logoimg:any = "logo.png";
  title = 'ng7-material-fitness';
  openSidenav = false;
}
