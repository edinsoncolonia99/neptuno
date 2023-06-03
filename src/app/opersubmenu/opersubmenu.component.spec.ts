import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpersubmenuComponent } from './opersubmenu.component';

describe('OpersubmenuComponent', () => {
  let component: OpersubmenuComponent;
  let fixture: ComponentFixture<OpersubmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpersubmenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpersubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
