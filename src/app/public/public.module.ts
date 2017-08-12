import {NgModule} from "@angular/core";
import {HomePageModule} from './home-page/hp.module';
import {ProductCategoryPageModule} from './product-category-page/product-category-page.module';

@NgModule({
  imports: [HomePageModule, ProductCategoryPageModule]
})

export class PublicModule {}
