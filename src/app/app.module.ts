import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { VerifyotpComponent } from './verifyotp/verifyotp.component';


import { ComponentsModule } from './components/components.module';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuardService } from './auth-guard.service';
import { BlockUIModule } from 'ng-block-ui';
import { SafePipe } from './safepipe';
// for HttpClient import:
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
// for Router import:
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
// for Core import:
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyFormComponent } from './my-form/my-form.component';
import { AppHttpInterceptor} from './httpconfig.interceptor';
import { NgxJsonViewerModule } from 'ngx-json-viewer';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VerifyotpComponent,    
    SafePipe, DashboardComponent, MyFormComponent
  ],
  imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ComponentsModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BlockUIModule.forRoot(),
        ToastrModule.forRoot(),
        LoadingBarHttpClientModule,
        LoadingBarModule,
        LoadingBarRouterModule,NgxJsonViewerModule
    ],
    providers:  [   AuthGuardService,
                    {
                     provide: HTTP_INTERCEPTORS,
                     useClass: AppHttpInterceptor,
                     multi: true
                    } 
                ],
    bootstrap: [AppComponent],    

})
export class AppModule { }
