import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent,HttpErrorResponse, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError} from "rxjs/internal/operators";
import { Router, RouterModule, Routes} from '@angular/router';
import { ApiIntegrationService } from './api-integration.service';
import { ToastrService} from 'ngx-toastr';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
    constructor(private authenticationService: ApiIntegrationService, private router :Router, private toastr: ToastrService,) { }
  	intercept(req: HttpRequest<any>, next: HttpHandler) { 		
    	const token: string = "test-angular-2021";//localStorage.getItem('authToken')!;
    	debugger
    	const authRequest = req.clone({
      		headers: req.headers.set("Authkey", token)
    	});    	
	    return next.handle(authRequest)
	    .pipe(catchError((err: any) => {
	         debugger
	        if (err instanceof HttpErrorResponse) {
	        	debugger
	            if (err.status === 401) {
	            	this.toastr.error('Unauthorized access');
	            	this.router.navigate(['/login'])
	            }
	        }

	      return new Observable<HttpEvent<any>>();
	    }));
  	}
}