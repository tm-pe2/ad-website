import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearlyUsageChartComponent } from './yearly-usage-chart.component';

describe('YearlyUsageChartComponent', () => {
  let component: YearlyUsageChartComponent;
  let fixture: ComponentFixture<YearlyUsageChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearlyUsageChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YearlyUsageChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
