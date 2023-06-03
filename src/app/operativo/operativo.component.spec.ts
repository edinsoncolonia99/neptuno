import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperativoComponent } from './operativo.component';

describe('OperativoComponent', () => {
  let component: OperativoComponent;
  let fixture: ComponentFixture<OperativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperativoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
