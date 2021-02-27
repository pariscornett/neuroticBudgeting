import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AddGoalComponent } from './add-goal/add-goal.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BudgetOverviewComponent } from './budget-overview/budget-overview.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AddGoalComponent,
    AppComponent,
    BudgetOverviewComponent,
    DashboardComponent,
    HomeComponent,
    RegistrationComponent,
    SettingsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
