import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsspecComponent } from './brandsspec.component';

describe('BrandsspecComponent', () => {
  let component: BrandsspecComponent;
  let fixture: ComponentFixture<BrandsspecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandsspecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandsspecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
