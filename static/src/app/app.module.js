"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var animations_1 = require("@angular/platform-browser/animations");
var primeng_1 = require("primeng/primeng");
var app_component_1 = require("./app.component");
var sign_in_component_1 = require("./sign-in/sign-in.component");
var calendar_component_1 = require("./calendar/calendar.component");
var page_not_found_component_1 = require("./page-not-found/page-not-found.component");
var appRoutes = [
    { path: 'sign-in', component: sign_in_component_1.SignInComponent },
    { path: 'calendar', component: calendar_component_1.CalendarComponent },
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
    { path: '**', component: page_not_found_component_1.PageNotFoundComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            router_1.RouterModule.forRoot(appRoutes),
            primeng_1.CalendarModule,
            animations_1.BrowserAnimationsModule,
        ],
        declarations: [
            app_component_1.AppComponent,
            sign_in_component_1.SignInComponent,
            calendar_component_1.CalendarComponent,
            page_not_found_component_1.PageNotFoundComponent,
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map