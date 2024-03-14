import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'productlist',component:ProductListComponent},
  {path:'productdetails',component:ProductDetailsComponent},
  {path:'register',loadChildren:()=> import('./authentication/authentication.module').then(x => x.AuthenticationModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
