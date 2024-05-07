import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XbowPageComponent } from './xbow-page.component';

describe('XbowPageComponent', () => {
  let component: XbowPageComponent;
  let fixture: ComponentFixture<XbowPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XbowPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XbowPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
