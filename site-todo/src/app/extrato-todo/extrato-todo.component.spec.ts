import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtratoTodoComponent } from './extrato-todo.component';

describe('ExtratoTodoComponent', () => {
  let component: ExtratoTodoComponent;
  let fixture: ComponentFixture<ExtratoTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtratoTodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtratoTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
