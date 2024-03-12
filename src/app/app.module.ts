import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { PaydataComponent } from './paydata/paydata.component';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { PayrollDashboardComponent } from './payroll-dashboard/payroll-dashboard.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatCheckboxModule} from '@angular/material/checkbox'
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { BackgroundComponent } from './background/background.component';
import { JobdataInfoComponent } from './jobdata-info/jobdata-info.component';
import { BankdataInfoComponent } from './bankdata-info/bankdata-info.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FooterComponent } from './footer/footer.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import { GlobalReportsComponent } from './global-reports/global-reports.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTooltipModule} from '@angular/material/tooltip';
import { PayslipComponent } from './payslip/payslip.component';
import{MatNativeDateModule} from '@angular/material/core';
import { LandingClientComponent } from './landing-client/landing-client.component';



@NgModule({
  declarations: [
    AppComponent,
    PaydataComponent,
    PayrollDashboardComponent,
    DashboardHeaderComponent,
    BackgroundComponent,
    JobdataInfoComponent,
    BankdataInfoComponent,
    PersonalDataComponent,
    LandingPageComponent,
    FooterComponent,
    GlobalReportsComponent,
    PayslipComponent,
    LandingClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatDatepickerModule,
    MatTooltipModule,
    MatNativeDateModule,
   
  ],
  providers: [
    MatDatepickerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
