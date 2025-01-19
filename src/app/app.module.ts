import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { SportComponentComponent } from './sport-component/sport-component.component';
import { ArtcomponentComponent } from './artcomponent/artcomponent.component';
import { BooksComponentComponent } from './books-component/books-component.component';
import { PoliticscomponenComponent } from './politicscomponen/politicscomponen.component';
import { CookingComponent } from './cooking/cooking.component';
import { FashionComponent } from './fashion/fashion.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SportComponentComponent,
    ArtcomponentComponent,
    BooksComponentComponent,
    PoliticscomponenComponent,
    CookingComponent,
    FashionComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
