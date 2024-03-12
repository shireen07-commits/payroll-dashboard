import { AfterViewInit,Component, OnInit, ViewChild} from '@angular/core';

import {MatDialog} from '@angular/material/dialog'
import { PaydataComponent } from '../paydata/paydata.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-payroll-dashboard',
  templateUrl: './payroll-dashboard.component.html',
  styleUrls: ['./payroll-dashboard.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class PayrollDashboardComponent implements OnInit {
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  columnsToDisplay = ['EmployeeId','FirstName','LastName','EmailId','DOJ','EmployeeStatus'];
  expandedElement!: PeriodicElement | null;
  isChecked = true;
  formGroup: FormGroup;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private dialog : MatDialog,formBuilder: FormBuilder) { 
    this.formGroup = formBuilder.group({
      enableWifi: '',
      acceptTerms: ['', Validators.requiredTrue],
    });
  }

  ngOnInit(): void {
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
  DOJ: string;
  EmployeeStatus: string;
  
  description: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    EmployeeId: 'AS10001',
    FirstName: 'Eason',
    LastName: 'Sam',
    EmailId: 'sam@gmail.com',
    DOJ: '22-07-2021',
    EmployeeStatus:'Active',
    
    description: `Sam is a new joinee.`,
  },
  {
    EmployeeId: 'AS10040',
    FirstName: 'John',
    LastName: 'Morgan',
    EmailId: 'jmorgan@gmail.com',
    DOJ: '12-08-2021',
    EmployeeStatus:'Active',
    
    description: `John is a new joinee.`,
  },
  {
    EmployeeId: 'AS10042',
    FirstName: 'Hellen',
    LastName: 'M',
    EmailId: 'hellen7@gmail.com',
    DOJ: '06-12-2020',
    EmployeeStatus:'Active',
    
    description: `John is a new joinee.`,
  },
  {
    EmployeeId: 'AS10050',
    FirstName: 'Vargo',
    LastName: 'Ken',
    EmailId: 'kenv12@gmail.com',
    DOJ: '17-05-2019',
    EmployeeStatus:'Inactive',
    
    description: `John is a new joinee.`,
  },
  {
    EmployeeId: 'AS10044',
    FirstName: 'Rafel',
    LastName: 'Morgan',
    EmailId: 'rmorgan@gmail.com',
    DOJ: '28-04-2021',
    EmployeeStatus:'Active',
    
    description: `John is a new joinee.`,
  },
  {
    EmployeeId: 'AS10046',
    FirstName: 'Sarah',
    LastName: 'Lindley',
    EmailId: 'sarln@gmail.com',
    DOJ: '27-09-2020',
    EmployeeStatus:'Inactive',
    
    description: `Sarah is a new joinee.`,
  },
 
  
  
 
 
];
