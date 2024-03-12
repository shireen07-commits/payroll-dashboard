import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaydataComponent } from './paydata.component';

describe('PaydataComponent', () => {
  let component: PaydataComponent;
  let fixture: ComponentFixture<PaydataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaydataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaydataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
