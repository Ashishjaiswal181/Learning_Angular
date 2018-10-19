import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ReadyComponent } from './ready/ready.component';
import { ServiceLoginService } from './service-login.service';
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReadyComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,RouterModule.forRoot([
      {
         path: 'login/Ashish',
         component: HomeComponent
      },
      {
        path: 'login',
        component: AppComponent
     }
   ])],
  providers: [ServiceLoginService],
  bootstrap: [ReadyComponent]
})
export class AppModule {}