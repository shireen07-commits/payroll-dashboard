import { Component, OnInit } from '@angular/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialog} from '@angular/material/dialog'
import { PaydataComponent } from '../paydata/paydata.component';

@Component({
  selector: 'app-jobdata-info',
  templateUrl: './jobdata-info.component.html',
  styleUrls: ['./jobdata-info.component.scss']
})
export class JobdataInfoComponent implements OnInit {

  constructor(private dialog : MatDialog) { }
  departments = [
    { id: 3, value: 'Dep 1' },
    { id: 2, value: 'Dep 2' },
    { id: 3, value: 'Dep 3' }];

  ngOnInit(): void {
  }
  openPayData() {
    this.dialog.open(PaydataComponent, {
      width : '100%'
    });
  }
}
