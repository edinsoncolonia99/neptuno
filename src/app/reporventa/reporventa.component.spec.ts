import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporventaComponent } from './reporventa.component';

describe('ReporventaComponent', () => {
  let component: ReporventaComponent;
  let fixture: ComponentFixture<ReporventaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporventaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporventaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
