import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Box5Component } from './box5.component';

describe('Box5Component', () => {
  let component: Box5Component;
  let fixture: ComponentFixture<Box5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Box5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Box5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
