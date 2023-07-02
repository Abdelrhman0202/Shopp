import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActegoriesComponent } from './actegories.component';

describe('ActegoriesComponent', () => {
  let component: ActegoriesComponent;
  let fixture: ComponentFixture<ActegoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActegoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActegoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
