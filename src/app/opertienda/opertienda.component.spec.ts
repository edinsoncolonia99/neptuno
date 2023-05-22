import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpertiendaComponent } from './opertienda.component';

describe('OpertiendaComponent', () => {
  let component: OpertiendaComponent;
  let fixture: ComponentFixture<OpertiendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpertiendaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpertiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
