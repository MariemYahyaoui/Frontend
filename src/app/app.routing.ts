import { PostComponent } from './post/post.component';
import { FashionComponent } from './fashion/fashion.component';
import { CookingComponent } from './cooking/cooking.component';
import { PoliticscomponenComponent } from './politicscomponen/politicscomponen.component';
import { BooksComponentComponent } from './books-component/books-component.component';
import { ArtcomponentComponent } from './artcomponent/artcomponent.component';
import { SportComponentComponent } from './sport-component/sport-component.component';
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';

const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'register',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'login',          component: LoginComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'sport',          component: SportComponentComponent },
    { path:'art',  component: ArtcomponentComponent},
    { path:'books',component: BooksComponentComponent},
    { path: 'politics', component:PoliticscomponenComponent},
    { path: 'cooking',component:CookingComponent},
    { path: 'fashion', component:FashionComponent},
    { path: 'post', component:PostComponent}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
