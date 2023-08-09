import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaoperativaComponent } from './ventaoperativa.component';

describe('VentaoperativaComponent', () => {
  let component: VentaoperativaComponent;
  let fixture: ComponentFixture<VentaoperativaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentaoperativaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentaoperativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
