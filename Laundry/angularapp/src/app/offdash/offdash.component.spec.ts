import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffdashComponent } from './offdash.component';

describe('OffdashComponent', () => {
  let component: OffdashComponent;
  let fixture: ComponentFixture<OffdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffdashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
