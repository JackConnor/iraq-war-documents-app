import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocumentComponent } from './document/document.component';
import { HomeComponent } from './home/home.component';
import { PressComponent } from './press/press.component';
import { BiosComponent } from './bios/bios.component';
import { AdminComponent } from './admin/admin.component';
import { CategoriesPipe } from './categories.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DocumentComponent,
    HomeComponent,
    AdminComponent,
    PressComponent,
    BiosComponent,
    CategoriesPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PdfViewerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
