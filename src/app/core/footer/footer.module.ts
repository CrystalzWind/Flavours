import { NgModule } from '@angular/core';
import {FooterInnerComponent} from "./2-footer-inner/footer-inner.component";
import {FeaturesBoxComponent} from "./1-features-box/features-box.component";
import {FooterComponent} from "./footer.component";

@NgModule({
  declarations: [
    FooterComponent,
    FooterInnerComponent,
    FeaturesBoxComponent
  ],
  exports: [FooterComponent,
    FooterInnerComponent,
    FeaturesBoxComponent
  ]
})
export class FooterModule { }
