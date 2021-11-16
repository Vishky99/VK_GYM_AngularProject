import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { BranchComponent } from './branch/branch.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path:''
  },
  {
    component: GalleryComponent,
    path:'gallery'
  },
  {
    component: RegisterComponent,
    path:'register'
  },
  {
    component: BranchComponent,
    path:'branches'
  },
  {
    component: FooterComponent,
    path:'contact'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
