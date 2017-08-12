import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from '../home-page/hp.component';
import {ProductCategoryPageComponent} from './product-category-page.component';

const PRODUCT_CATEGORY_PAGE_ROUTING: Routes = [
  {path: '', component: ProductCategoryPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(PRODUCT_CATEGORY_PAGE_ROUTING)],
  exports: [RouterModule]
})

export class ProductCategoryPageRoutingModule {}
