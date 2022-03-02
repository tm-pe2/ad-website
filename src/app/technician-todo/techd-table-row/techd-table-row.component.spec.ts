import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechdTableRowComponent } from './techd-table-row.component';

describe('TechdTableRowComponent', () => {
  let component: TechdTableRowComponent;
  let fixture: ComponentFixture<TechdTableRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechdTableRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechdTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
