import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScreenComponent } from './site/components/screen/screen.component';
import { ArchiveComponent } from './site/components/archive/archive.component';
import { HomeComponent } from './site/home/home.component';
import { Oops404Component } from './site/oops404/oops404.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'screen', component: ScreenComponent },
  { path: 'archive', component: ArchiveComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: Oops404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
