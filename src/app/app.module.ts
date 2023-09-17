import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { HeaderCarouselComponent } from './header-carousel/header-carousel.component';
//import { NgwWowModule } from 'ngw-wow';
import { SearchModalComponent } from './search-modal/search-modal.component';
import { HomeComponent } from './home/home.component';
import { ProgrammesComponent } from './programmes/programmes.component';
import { AboutComponent } from './about/about.component';
import { BlogdetailComponent } from './blogdetail/blogdetail.component';
import { BloggridComponent } from './bloggrid/bloggrid.component';
import { FactsComponent } from './facts/facts.component';
import { WeareComponent } from './weare/weare.component';
import { FeaturesComponent } from './features/features.component';
import { ServicesComponent } from './services/services.component';
import { ExecutiveboardComponent } from './executiveboard/executiveboard.component';
import { PartenairesComponent } from './partenaires/partenaires.component';
import { BlogComponent } from './blog/blog.component';
import { VendorComponent } from './vendor/vendor.component';
import { BacktotopComponent } from './backtotop/backtotop.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CategoryComponent } from './category/category.component';
import { RecentpostComponent } from './recentpost/recentpost.component';
import { TagsComponent } from './tags/tags.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SpinnerComponent,
    NavbarComponent,
    TopbarComponent,
    HeaderCarouselComponent,
    SearchModalComponent,
    HomeComponent,
    ProgrammesComponent,
    AboutComponent,
    BlogdetailComponent,
    BloggridComponent,
    FactsComponent,
    WeareComponent,
    FeaturesComponent,
    ServicesComponent,
    ExecutiveboardComponent,
    PartenairesComponent,
    BlogComponent,
    VendorComponent,
    BacktotopComponent,
    SidebarComponent,
    CategoryComponent,
    RecentpostComponent,
    TagsComponent,
    BlogListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //NgwWowModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
