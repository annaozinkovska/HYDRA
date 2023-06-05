import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToEditComponent } from './to-edit.component';

describe('ToEditComponent', () => {
  let component: ToEditComponent;
  let fixture: ComponentFixture<ToEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
