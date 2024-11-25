import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarOvaComponent } from './editar-ovas.component';

describe('EditarOvaComponent', () => {
  let component: EditarOvaComponent;
  let fixture: ComponentFixture<EditarOvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarOvaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarOvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
