import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankdataInfoComponent } from './bankdata-info/bankdata-info.component';
import { GlobalReportsComponent } from './global-reports/global-reports.component';
import { JobdataInfoComponent } from './jobdata-info/jobdata-info.component';
import { LandingClientComponent } from './landing-client/landing-client.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PaydataComponent } from './paydata/paydata.component';
import { PayrollDashboardComponent } from './payroll-dashboard/payroll-dashboard.component';
import { PayslipComponent } from './payslip/payslip.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingPageComponent},
  { path: 'payroll', component: PayrollDashboardComponent},
  { path: 'paydata', component: PaydataComponent },
  { path: 'jobdata', component: JobdataInfoComponent },
  { path: 'bankdata/:id', component: BankdataInfoComponent },
  { path: 'personaldata', component: PersonalDataComponent },
  { path: 'global', component: GlobalReportsComponent },
  { path: 'payslip', component: PayslipComponent },
  { path: 'landclient', component: LandingClientComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
