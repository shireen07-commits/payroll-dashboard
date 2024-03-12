import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobdataInfoComponent } from './jobdata-info.component';

describe('JobdataInfoComponent', () => {
  let component: JobdataInfoComponent;
  let fixture: ComponentFixture<JobdataInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobdataInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobdataInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
