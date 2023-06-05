import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TECHNOLOGIESComponent } from './technologies.component';

describe('TECHNOLOGIESComponent', () => {
  let component: TECHNOLOGIESComponent;
  let fixture: ComponentFixture<TECHNOLOGIESComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TECHNOLOGIESComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TECHNOLOGIESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
