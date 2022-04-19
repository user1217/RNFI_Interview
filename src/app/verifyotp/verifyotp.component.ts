import { Component, OnInit } from '@angular/core';
import {ApiIntegrationService} from '../api-integration.service';
import { FormControl, FormBuilder, Validators, FormGroup }
  from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { ConstantModule } from '../constants'
@Component({
  selector: 'app-verifyotp',
  templateUrl: './verifyotp.component.html',
  styleUrls: ['./verifyotp.component.css']
})
export class VerifyotpComponent implements OnInit {
  otpForm: any = FormGroup;
  resp:any;
  authToken:any;
  constructor(
     private api:ApiIntegrationService,
    private toastr: ToastrService,
    private router: Router,
    private fb: FormBuilder,private constant:ConstantModule
  ) { }


  //**************************** verify otp function start from here********************//
 
  verifyOtp(formvalue: any) {       
  	  this.authToken =localStorage.getItem('authToken');
      var postData  = new FormData;
      postData.append('token', this.constant.token);
      postData.append('authToken',this.authToken);     
      postData.append('otp', this.otpForm.value.otp);        
      this.api.verifyOtp(postData).subscribe((response) => {
         this.resp=response; 
         localStorage.setItem('userInfo',JSON.stringify(this.resp));
         if (this.resp.status) {   
              this.router.navigate(['/dashboard']);
          }else {
      	 	   this.toastr.error(this.resp.message);
          }
        }, error => {
            if (error.error.statusCode==400){
               this.toastr.error(error.error.message);
             }           
          });    
  }


  //**************************** verify otp function end  here********************//

  verifyOtpFormInit() {
    this.otpForm = this.fb.group({
      otp: new FormControl('', Validators.required)  
    });
  }

 
  ngOnInit() {
    this.verifyOtpFormInit();
  }

}
