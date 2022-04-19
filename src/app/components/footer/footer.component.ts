import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterModule, Routes } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }



}
