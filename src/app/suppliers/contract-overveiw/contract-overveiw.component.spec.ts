import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractOverveiwComponent } from './contract-overveiw.component';

describe('ContractOverveiwComponent', () => {
  let component: ContractOverveiwComponent;
  let fixture: ComponentFixture<ContractOverveiwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractOverveiwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractOverveiwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
