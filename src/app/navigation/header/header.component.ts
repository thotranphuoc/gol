import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() sidenavToggle = new EventEmitter<void>();
  isAuth = false;
  authSubscription: Subscription
  Components1 = [
    {title: 'List', routerLink: '/inbound-sea-freightDO-list', icon: 'face'},
    {title: 'Create New', routerLink: '/inbound-sea-freightDO', icon: 'face'},
    // {title: 'General', routerLink: '/inbound-sea-freightDO-general', icon: 'face'},
    // {title: 'Parties', routerLink: '/inbound-sea-freightDO-parties', icon: 'face'},
    // {title: 'Routing', routerLink: '/inbound-sea-freightDO-routing', icon: 'face'},
    // {title: 'Cargo', routerLink: '/inbound-sea-freightDO-cargo', icon: 'face'},
    // {title: 'Communication', routerLink: '/inbound-sea-freightDO-communication', icon: 'face'},
    // {title: 'Signup', routerLink: '/signup', icon: 'face'},
    // {title: 'Login', routerLink: '/login', icon: 'input'},
  ]
  Components2 = [
    {title: 'Training', routerLink: '/training', icon: 'fitness_center'}
  ]
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(authState => {
      this.isAuth = authState;
      console.log(this.isAuth)
    })
  }

  onLogout(){
    this.authService.logout();
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

}
