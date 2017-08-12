import { Routes, RouterModule } from "@angular/router";
import {NgModule} from "@angular/core";
import {HomePageComponent} from './public/home-page/hp.component';


const APP_ROUTES: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  // {path: '', component: HomePageComponent},
  // {path: 'index', component: IndexComponent, children: [
  //   {path: 'add', component: AddProductComponent},
  //   {path: 'list', component: ProductListComponent}
  // ]},

  {path: 'products', loadChildren: './public/product-category-page/product-category-page.module#ProductCategoryPageModule'}
];
@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}

