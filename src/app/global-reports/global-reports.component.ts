import {SelectionModel} from '@angular/cdk/collections';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { Component, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {FormGroup, FormControl} from '@angular/forms';



@Component({
  selector: 'app-global-reports',
  templateUrl: './global-reports.component.html',
  styleUrls: ['./global-reports.component.scss']
})
export class GlobalReportsComponent implements OnInit {
  displayedColumns: string[] = ['select', 'reportNo', 'ReportName', 'author', 'lastmodified','actions'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);
  range = new FormGroup({
    start: new FormControl(new Date(2022, 4, 30)),
    end: new FormControl(new Date(2022, 5, 30)),
   
    
  });

  constructor() { }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }
  downloadReports(){
    var link = document.createElement('a');
  link.href = "../../assets/files/Brandbox Advertising.pdf";
  link.download = "Brandbox Advertising.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);


  }
  ngOnInit(): void {
  
  }
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.reportNo + 1}`;
  }
}
export interface PeriodicElement {
  ReportName: string;
  reportNo: number;
  author: string;
  lastmodified: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {reportNo: 1, ReportName: 'GL Report', author: 'Shilpa', lastmodified: '12-5-2021'},
  {reportNo: 2, ReportName: 'Loan Report', author: 'Sakshi', lastmodified: '22-7-2021'},
  {reportNo: 3, ReportName: 'YTD Report', author: 'Raghav', lastmodified: '06-4-2021'},
  {reportNo: 4, ReportName: 'Quaterly ETDS filing', author: 'Pradeep', lastmodified: '17-6-2021'},
  {reportNo: 5, ReportName: 'Variance report', author: 'Pranav', lastmodified: '14-5-2020'},
  {reportNo: 6, ReportName: 'CTC Recorn Report', author: 'Ravi', lastmodified: '27-4-2021'},
  
  
 
];