import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudashComponent } from './studash.component';

describe('StudashComponent', () => {
  let component: StudashComponent;
  let fixture: ComponentFixture<StudashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
