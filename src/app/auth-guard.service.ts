import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot, Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(public router: Router){ }
	canActivate(){
		if(localStorage.getItem('authToken'))
			return true;
		else{
			this.router.navigate(['/login']);	
			return false;
		}
	}
}
