import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarOvasComponent } from './listar-ovas.component';

describe('ListarOvasComponent', () => {
  let component: ListarOvasComponent;
  let fixture: ComponentFixture<ListarOvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarOvasComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListarOvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
