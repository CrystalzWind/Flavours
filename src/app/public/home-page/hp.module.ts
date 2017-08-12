import { NgModule } from '@angular/core';
import {HomePageComponent} from "./hp.component";
import {SliderComponent} from "./2.1-slider/slider.component";
import {BannerComponent} from "./2.2-banner/banner.component";
import {FeaturedComponent} from "./2.3-featured/featured.component";
import {BestsellerComponent} from "./2.4-bestseller/bestseller.component";

import {LatestBlogComponent} from "./2.5-latest-blog/latest-blog.component";
import {BrandLogoComponent} from "./2.6.1-brand-logo/brand-logo.component";
import {TestimonialComponent} from "./2.6.2-testimonnials/testimonial.component";
import {SharedModule} from '../../shared/shared.module';




@NgModule({
  declarations: [
    HomePageComponent, SliderComponent, BannerComponent,
    FeaturedComponent, BestsellerComponent,
    LatestBlogComponent,
    BrandLogoComponent, TestimonialComponent
  ],
  imports: [
    SharedModule
  ],
  providers: [],
})
export class HomePageModule { }
