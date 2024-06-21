import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAgenciesComponent } from './list-agencies.component';

describe('ListAgenciesComponent', () => {
  let component: ListAgenciesComponent;
  let fixture: ComponentFixture<ListAgenciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAgenciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAgenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
