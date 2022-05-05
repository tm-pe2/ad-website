import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumGraphComponent } from './medium-graph.component';

describe('MediumGraphComponent', () => {
  let component: MediumGraphComponent;
  let fixture: ComponentFixture<MediumGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediumGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
