import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TableComponent } from './components/table/table.component';
import { FiltercomponentComponent } from './components/filtercomponent/filtercomponent.component';
import { OtpexampleComponent } from './components/otpexample/otpexample.component';

@NgModule({
  imports:      [ 
    BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, TableComponent, FiltercomponentComponent, OtpexampleComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
