import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencieMapComponent } from './agencie-map.component';

describe('AgencieMapComponent', () => {
  let component: AgencieMapComponent;
  let fixture: ComponentFixture<AgencieMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencieMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencieMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
