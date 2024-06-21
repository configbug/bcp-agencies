import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapAgenciesComponent } from './map-agencies.component';

describe('MapAgenciesComponent', () => {
  let component: MapAgenciesComponent;
  let fixture: ComponentFixture<MapAgenciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapAgenciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapAgenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
