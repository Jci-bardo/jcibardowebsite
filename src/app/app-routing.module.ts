import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogdetailComponent } from './blogdetail/blogdetail.component';
import { BloggridComponent } from './bloggrid/bloggrid.component';
import { AboutComponent } from './about/about.component';
import { ProgrammesComponent } from './programmes/programmes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'programmes', component: ProgrammesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'detail', component: BlogdetailComponent },
  { path: 'grid', component: BloggridComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
