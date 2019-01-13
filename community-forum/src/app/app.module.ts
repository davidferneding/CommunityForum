import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RequestInterceptor } from './interceptors/request-interceptor';
import { LoginModalComponent } from './components/login-modal/login-modal.component'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [{ 
    provide: HTTP_INTERCEPTORS, 
    useClass: RequestInterceptor, 
    multi: true 
}],
  bootstrap: [AppComponent]
})
export class AppModule { }
