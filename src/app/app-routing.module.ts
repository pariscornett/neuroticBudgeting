import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddGoalComponent } from './add-goal/add-goal.component';
import { BudgetOverviewComponent } from './budget-overview/budget-overview.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { SettingsComponent } from './settings/settings.component';

//define routes
const routes: Routes = [
  {path: 'add-goal', component: AddGoalComponent},
  {path: 'budget-overview', component: BudgetOverviewComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', component: HomeComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'settings', component: SettingsComponent}
];

//configures ngModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
