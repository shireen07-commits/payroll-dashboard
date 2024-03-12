import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankdataInfoComponent } from './bankdata-info.component';

describe('BankdataInfoComponent', () => {
  let component: BankdataInfoComponent;
  let fixture: ComponentFixture<BankdataInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankdataInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankdataInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
