import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeStaffComponent } from './office-staff.component';

describe('OfficeStaffComponent', () => {
  let component: OfficeStaffComponent;
  let fixture: ComponentFixture<OfficeStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeStaffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
