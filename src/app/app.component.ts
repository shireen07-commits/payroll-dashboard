import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog'
import { PaydataComponent } from './paydata/paydata.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AppComponent {
  title = 'payroll-dashboard';
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  columnsToDisplay = ['EmployeeId','FirstName','LastName','EmailId','EmployeeMaster','attendance','PersonalData','Job Data','Bank Info','Payroll Info'];
  expandedElement!: PeriodicElement | null;
  displayedColumns: string[] = ['employeeId', 'firstName', 'lastName', 'payData','jobData'];
  dataSourceForTable = ELEMENT_DATA_VALUE;
  expandedElement1!: PayElement | null;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private dialog : MatDialog){

  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  openPayData() {
    this.dialog.open(PaydataComponent, {
      width : '30%'
    });
  }
}
export interface PeriodicElement {
  EmployeeId: string;
  FirstName: string;
  LastName: string;
  EmailId: string;
  EmployeeMaster: string;
  attendance: string;
  PersonalData: string;
  jobData: string;
  bankInfo: string;
  payRollInfo: string;
  description: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    EmployeeId: 'AS10001',
    FirstName: 'Raghu',
    LastName: 'selvan',
    EmailId: 'raghu@gmail.com',
    EmployeeMaster: 'Data uploaded',
    attendance:'present',
    PersonalData: 'full-time',
    jobData: 'QA',
    bankInfo:'IDBI',
    payRollInfo: 'QA',
    description: `Raghu is a new joinee.`,
  },
  
 
 
];
export interface PayElement {
  employeeId: string;
  firstName: string;
  lastName: string;
  
}

const ELEMENT_DATA_VALUE: PayElement[] = [
  {employeeId: 'A14568', firstName: 'Hydrogen',lastName: 'Hydrogen' },
  {employeeId: 'A14567', firstName: 'Helium',lastName: 'Hydrogen' },
  {employeeId: 'A14569', firstName: 'Lithium',lastName: 'Hydrogen'},
  {employeeId: 'A14570', firstName: 'Beryllium',lastName: 'Hydrogen'},
  {employeeId: 'A14571', firstName: 'Boron', lastName: 'Hydrogen'},
  {employeeId: 'A14572', firstName: 'Carbon',lastName: 'Hydrogen' },
  {employeeId: 'A14573', firstName: 'Nitrogen',lastName: 'Hydrogen' },
  
];