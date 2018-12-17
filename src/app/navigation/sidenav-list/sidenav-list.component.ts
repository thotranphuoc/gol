import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit, OnDestroy {
  isAuth = false;
  authSubscription: Subscription
  @Output() sidenavToggle = new EventEmitter
  constructor( private authService: AuthService) { }

  Components1 = [
    {title: 'List', routerLink: '/inbound-sea-freightDO-list', icon: 'face'},
    {title: 'Create New', routerLink: '/inbound-sea-freightDO', icon: 'face'},
    // {title: 'General', routerLink: '/inbound-sea-freightDO-general', icon: 'face'},
    // {title: 'Parties', routerLink: '/inbound-sea-freightDO-parties', icon: 'face'},
    // {title: 'Routing', routerLink: '/inbound-sea-freightDO-routing', icon: 'face'},
    // {title: 'Cargo', routerLink: '/inbound-sea-freightDO-cargo', icon: 'face'},
    // {title: 'Communication', routerLink: '/inbound-sea-freightDO-communication', icon: 'face'},
    // // {title: 'Signup', routerLink: '/signup', icon: 'face'},
    // // {title: 'Login', routerLink: '/login', icon: 'input'},
  ]

  Components2 = [
    {title: 'Training', routerLink: '/training', icon: 'fitness_center'}
  ]
  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(authState=>{
      this.isAuth = authState
    })
  }

  onLogout(){
    this.authService.logout();
    this.onClose();
  }

  ngOnDestroy(){
    this.authSubscription.unsubscribe();
  }

  onClose(){
    this.sidenavToggle.emit();
  }

  

}
