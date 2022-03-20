import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { EditModalComponent } from './edit-modal.component';

describe('EditModalComponent', () => {
  let component: EditModalComponent;
  let fixture: ComponentFixture<EditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditModalComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditModalComponent);
    component = fixture.componentInstance;
    component.data = {
      "name": "Christensen",
      "issue": "magna occaecat et commodo",
      "description": "Exercitation eu enim cupidatat non ipsum aliquip laboris nostrud amet.",
      "status": "Closed",
      "id": 0
    };
    fixture.detectChanges();
  });
  it('should create', () => {

    expect(component).toBeTruthy();
  });
});
