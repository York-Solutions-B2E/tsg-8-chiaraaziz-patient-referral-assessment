import { Routes } from "@angular/router";
import { DashboardComponent } from "./features/dashboard/dashboard.component";
import { PatientDetailsComponent } from "./features/patient details/patient-details/patient-details.component";


export const routes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'patients/:id', component:PatientDetailsComponent},
]
