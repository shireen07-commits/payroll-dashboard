import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bankdata-info',
  templateUrl: './bankdata-info.component.html',
  styleUrls: ['./bankdata-info.component.scss']
})
export class BankdataInfoComponent implements OnInit {
  id:string|null;
  constructor(private _Activatedroute:ActivatedRoute)
  {
    this.id="1";
  }
 

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => { 
      
      this.id = params.get('id'); 
      console.log(this.id);
  });
  
  }

}
