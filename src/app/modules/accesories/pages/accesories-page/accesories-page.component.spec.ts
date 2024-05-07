import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoriesPageComponent } from './accesories-page.component';

describe('AccesoriesPageComponent', () => {
  let component: AccesoriesPageComponent;
  let fixture: ComponentFixture<AccesoriesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccesoriesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccesoriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
