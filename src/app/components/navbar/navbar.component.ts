import { Component, OnInit, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy, formatDate } from '@angular/common';
import { Router } from '@angular/router';
declare var $: any;
declare var jquery: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  location: Location;
  private sidebarVisible: boolean;
  today = new Date();
  jstoday = '';
  showMenu: boolean = true
  userType: any;
  userId: any;
  logo: any;
  userName?: string;
  userDetail: any;
  subaccount?: boolean;
  isOption: any;
  isShowMenu: boolean = true;
  isShowPromote: boolean = true;
  constructor(
    location: Location,
    private element: ElementRef,
    private router: Router) {
    this.location = location;
    this.sidebarVisible = false;
    this.jstoday = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
  }



  ngOnInit(): void {
  }

  logout() {

  }


  ngOnDestroy() {

  }

  goDashboard() {
    this.router.navigate(['/dash']);
  }

  clearSession() {
    localStorage.clear();
  }


}

