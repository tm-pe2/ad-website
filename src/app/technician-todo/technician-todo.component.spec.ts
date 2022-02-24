import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicianTodoComponent } from './technician-todo.component';

describe('TechnicianTodoComponent', () => {
  let component: TechnicianTodoComponent;
  let fixture: ComponentFixture<TechnicianTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicianTodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicianTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
