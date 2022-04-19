import { Component, OnInit } from '@angular/core';
import { ApiIntegrationService} from '../api-integration.service';
import { FormControl, FormGroup, ValidatorFn, Validators,FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { ConstantModule } from '../constants'

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {
  public myForm: FormGroup = this.fb.group({});
  authToken:any;
  userDetails:any;
  constructor(
    private api:ApiIntegrationService,
    private toastr: ToastrService,
    private router: Router,
    private fb: FormBuilder,private constant:ConstantModule
  ){ 
  	  	    this.userDetails= JSON.parse(localStorage.getItem('userInfo')!); 
  }
  ngOnInit(){
    this.getDynamicform();
  }




//************************get getDynamicform  API intregration  start from here**********************//

  resp:any;
  respData:any=[];
  getDynamicform(){
  	 this.authToken =localStorage.getItem('authToken');
      var postData  = new FormData;
      postData.append('token', this.constant.token);
      postData.append('authToken',this.authToken);   
      this.api.getDynamicform(postData).subscribe((response) => {
        this.resp=response;
        debugger
        if(this.resp.statuscode==200){
           this.respData=this.resp.data[0];
        }
        
      })
  }

//***********************get getDynamicform API intregration  start from here***********************//





//************************Update Dynamic API intregration start here ******************************//

createDynamicform(){
      var postData  = new FormData;
      postData.append('token', this.constant.token);
      postData.append('authToken',this.authToken);     
      postData.append('json',  this.respData);  
   this.api.createDynamicform(postData).subscribe((response) => {
             this.resp=response;        
        if(this.resp.statuscode==200){
            this.toastr.success("form Update successfully");
        }
        
      })
}

//************************Update Dynamic API intregration end here ************************//

}
