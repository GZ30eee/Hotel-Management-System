import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutOneComponent } from './about-one.component';

describe('AboutOneComponent', () => {
  let component: AboutOneComponent;
  let fixture: ComponentFixture<AboutOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
