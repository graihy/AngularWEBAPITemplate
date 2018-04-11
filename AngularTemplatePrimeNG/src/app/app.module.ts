import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button'
import { DataTableModule } from 'primeng/datatable';

import { AppComponent }  from './app.component';

@NgModule({
    imports: [BrowserModule, BrowserAnimationsModule, ButtonModule, DataTableModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
