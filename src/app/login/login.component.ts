import { Component, OnInit } from '@angular/core';
 import {ApiIntegrationService} from '../api-integration.service';
import { FormControl, FormBuilder, Validators, FormGroup }
  from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { ConstantModule } from '../constants'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  passwordForm: any = FormGroup;
  forget: any = false;
  loginForm: any = FormGroup;
  email: any;
  forgotpasswordDetail: any = { email: '' };
  ranNum: any;
  resp:any;
  constructor(
     private api:ApiIntegrationService,
    private toastr: ToastrService,
    private router: Router,
    private fb: FormBuilder,private constant:ConstantModule
  ) { }


  //******************Login function from start here **********************// 

  login(formvalue: any) {       
      var postData = new FormData;
      postData.append('username', this.loginForm.value.username);
      postData.append('password', this.loginForm.value.password);
      postData.append('token', this.constant.token);     
      this.api.login(postData).subscribe((response) => { //login service call from here
         this.resp=response; 
         if (this.resp.twostep) {              
              localStorage.setItem('authToken',this.resp.authToken);
              this.router.navigate(['/verifyOtp']);
          }else {
      	 	   this.toastr.error(this.resp.message);
          }
        }, error => {
            if (error.error.statusCode==400){
               this.toastr.error(error.error.message);
             }           
          });    
  }

  //******************Login function from end here **********************//

  loginFormInit() {
    this.loginForm = this.fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)   
    });
  }

 
  ngOnInit() {
    this.loginFormInit();
  }

}
