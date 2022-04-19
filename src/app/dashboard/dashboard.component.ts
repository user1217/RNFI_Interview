import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userDetails:any;
  constructor() { 
  	  	    this.userDetails= JSON.parse(localStorage.getItem('userInfo')!); 
  }

  ngOnInit(){

  }

  clearSession() {
    localStorage.clear();
  }

}
