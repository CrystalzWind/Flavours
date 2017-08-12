import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {PageHeadingComponent} from "./1.page-heading/page-heading.component";
import { SidebarComponent } from './3.sidebar/sidebar.component';
import { CategoryComponent } from './2.category/category.component';
import { ToolbarComponent } from './2.category/2.1-toolbar/toolbar.component';

import { CategoryProductsComponent } from './2.category/2.2-category-products/category-products.component';
import {ProductCategoryPageComponent} from './product-category-page.component';
import {SharedModule} from '../../shared/shared.module';
import {ProductCategoryPageRoutingModule} from './product-category-page-routing.module';


@NgModule({
  declarations: [
    ProductCategoryPageComponent,
    PageHeadingComponent,
    SidebarComponent,
    CategoryComponent,
    ToolbarComponent,
    CategoryProductsComponent
  ],
  imports: [
    SharedModule,
    ProductCategoryPageRoutingModule
  ],
  providers: [],
})
export class ProductCategoryPageModule { }
