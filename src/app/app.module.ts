import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TableComponent } from './components/table/table.component';
import { OtpexapleComponent } from './components/otpexaple/otpexaple.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule ],
  declarations: [ AppComponent,
   HelloComponent,
   TableComponent,
   OtpexapleComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
