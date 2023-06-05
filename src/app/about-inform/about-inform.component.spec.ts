import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutInformComponent } from './about-inform.component';

describe('AboutInformComponent', () => {
  let component: AboutInformComponent;
  let fixture: ComponentFixture<AboutInformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutInformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutInformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
