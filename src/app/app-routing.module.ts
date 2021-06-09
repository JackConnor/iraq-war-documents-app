import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { DocumentComponent } from './document/document.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'document/:id', component: DocumentComponent },
  { path: 'admin', component: AdminComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
