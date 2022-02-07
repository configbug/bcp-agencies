import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencieDetailComponent } from './agencie-detail.component';

describe('AgencieDetailComponent', () => {
  let component: AgencieDetailComponent;
  let fixture: ComponentFixture<AgencieDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencieDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
