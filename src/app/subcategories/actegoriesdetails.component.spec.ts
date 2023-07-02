import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActegoriesdetailsComponent } from './actegoriesdetails.component';

describe('ActegoriesdetailsComponent', () => {
  let component: ActegoriesdetailsComponent;
  let fixture: ComponentFixture<ActegoriesdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActegoriesdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActegoriesdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
