import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddGoalComponent } from './add-goal/add-goal.component';
import { BudgetOverviewComponent } from './budget-overview/budget-overview.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { SettingsComponent } from './settings/settings.component';

//sets up routes constant where you define your routes
const routes: Routes = [
{path: 'dashboard', component: DashboardComponent},
{path: 'settings', component: SettingsComponent},
{path: 'registration', component: RegistrationComponent},
{path: 'budget-overview', component: BudgetOverviewComponent},
{path: 'add-goal', component: AddGoalComponent}
];

//configures ngModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
