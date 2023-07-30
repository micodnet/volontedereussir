import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { LiensComponent } from './pages/liens/liens.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from  'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';
import { ListboxModule } from 'primeng/listbox';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SpeedDialModule } from 'primeng/speeddial';
import { ScrollerModule } from 'primeng/scroller';
import { SlideMenuModule } from 'primeng/slidemenu';
import { LocalComponent } from './local/local.component';
import { AccordionModule } from 'primeng/accordion';
import { ActivatedRouteSnapshot } from '@angular/router';
import { MenuItem } from 'primeng/api';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ArticlesComponent,
    LiensComponent,
    LocalComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
    DropdownModule,
    ListboxModule,
    SplitButtonModule,
    SpeedDialModule,
    BrowserAnimationsModule,
    ScrollerModule,
    SlideMenuModule,
    AccordionModule,
    ReactiveFormsModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
