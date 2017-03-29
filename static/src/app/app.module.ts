import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {CalendarModule} from 'primeng/primeng';

import { AppComponent }  from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CalendarComponent } from './calendar/calendar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'sign-in', component:SignInComponent },
  { path: 'calendar', component:CalendarComponent},
  //{ path: 'hero/:id',      component: HeroDetailComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  { path: '',
    redirectTo: '/sign-in',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot(appRoutes),
    CalendarModule,
    BrowserAnimationsModule,
  ],
  declarations: [ 
    AppComponent,
    SignInComponent,
    CalendarComponent,
    PageNotFoundComponent, 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }