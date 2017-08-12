import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {SectionTitleComponent} from "./component/section-title/section-title.component";
import { AddToCartButtonComponent } from './component/add-to-cart-button/add-to-cart-button.component';
import { ButtonHighlightedDirective } from './directives/button-highlighted.directive';
import { ItemPanelComponent } from './component/item-panel/item-panel.component';

@NgModule({
  declarations: [
    SectionTitleComponent,
    AddToCartButtonComponent,
    ButtonHighlightedDirective,
    ItemPanelComponent,
  ],
  exports: [
    CommonModule,
    SectionTitleComponent,
    AddToCartButtonComponent,
    ItemPanelComponent
  ]
})
export class SharedModule { }
