import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
 import { HttpModule } from '@angular/http';
import { LoginlogoutGuard } from './loginlogout.guard';
import { SafePipe } from './safe.pipe';
import { ClientdetailComponent } from './clientdetail/clientdetail.component';
// import { NavbarComponent } from '../app/navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    SafePipe,
    ClientdetailComponent,
    // NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule ,
    
  ],
  providers: [LoginlogoutGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
