import {NgModule} from "@angular/core";
import {HeaderComponent} from "./header/header.component";
import {FooterModule} from "./footer/footer.module";
import {AppRoutingModule} from '../app-routing.module';
import {Ng2CloudinaryModule} from "ng2-cloudinary";


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    FooterModule,
    AppRoutingModule,
    Ng2CloudinaryModule,
  ],
  exports: [HeaderComponent, FooterModule, AppRoutingModule, Ng2CloudinaryModule]
})

export class CoreModule {}
