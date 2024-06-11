import { Routes } from "@angular/router";
import { DashboardComponent } from "./features/dashboard/dashboard.component";
import { PatientDetailsComponent } from "./features/patient-details/patient-details.component";
import { PatientAddEditComponent } from "./features/patient-add-edit/patient-add-edit.component";
import { OktaCallbackComponent, OktaAuthGuard } from '@okta/okta-angular';
import { ProfileComponent } from "./profile/profile.component";
import { WelcomeComponent } from "./features/welcome/welcome.component";



export const routes: Routes = [
    // {path: 'protected',
    //     loadChildren: () => import('dashboard').then(m =>m.Protected)
    // },
    {path: '', component: WelcomeComponent, pathMatch: 'full'},
    {path: 'login/callback', component: OktaCallbackComponent, pathMatch:'full' },
    {path: 'dashboard', component: DashboardComponent},
    {path: 'patient/:id/edit', component:PatientAddEditComponent, pathMatch: 'full'},
    {path: 'patient/:id', component:PatientDetailsComponent, pathMatch: 'full'},
    {path: 'patient', component: PatientAddEditComponent, pathMatch: 'full'},
    
    {path: 'profile', component: ProfileComponent},
]
