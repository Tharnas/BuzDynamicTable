import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableCreatorComponent } from './table-creator/table-creator.component';
import { TableViewerComponent } from './table-viewer/table-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    TableCreatorComponent,
    TableViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
