import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { BiosComponent } from './bios/bios.component';
import { DocumentComponent } from './document/document.component';
import { HomeComponent } from './home/home.component';
import { PressComponent } from './press/press.component';

const routes: Routes = [
  { path: 'document/:id', component: DocumentComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'people', component: BiosComponent },
  { path: 'press', component: PressComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
