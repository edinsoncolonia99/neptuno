import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResulventaComponent } from './resulventa.component';

describe('ResulventaComponent', () => {
  let component: ResulventaComponent;
  let fixture: ComponentFixture<ResulventaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResulventaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResulventaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
