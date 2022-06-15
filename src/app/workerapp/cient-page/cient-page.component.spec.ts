import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CientPageComponent } from './cient-page.component';

describe('CientPageComponent', () => {
  let component: CientPageComponent;
  let fixture: ComponentFixture<CientPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CientPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CientPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
