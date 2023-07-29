import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { CarouselItemsComponent } from './components/carousel-items/carousel-items.component';
import { AmountBoxComponent } from './components/amount-box/amount-box.component';
import { LogoWhiteComponent } from 'src/assets/svgs/logo-white/logo-white.component';
import { BellIconComponent } from 'src/assets/svgs/bell-icon/bell-icon.component';
import { MoneyIconComponent } from 'src/assets/svgs/money-icon/money-icon-component';
import { UserIconComponent } from 'src/assets/svgs/user-icon/user-icon.component';
import { SearchLogoComponent } from 'src/assets/svgs/search-icon/search-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HomeComponent,
    HeaderComponent,
    CarouselItemsComponent,
    AmountBoxComponent,
    LogoWhiteComponent,
    BellIconComponent,
    MoneyIconComponent,
    UserIconComponent,
    SearchLogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
