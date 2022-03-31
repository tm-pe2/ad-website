import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CientListComponent } from './cient-list.component';

describe('CientListComponent', () => {
  let component: CientListComponent;
  let fixture: ComponentFixture<CientListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CientListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
