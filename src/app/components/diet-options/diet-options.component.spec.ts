import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { DietOptionsComponent } from './diet-options.component';

describe('DietOptionsComponent', () => {
  let component: DietOptionsComponent;
  let fixture: ComponentFixture<DietOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DietOptionsComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DietOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default selected diet as "vegetarian"', () => {
    expect(component.selectedDiet).toBe('vegetarian');
  });

  it('should emit selected diet when updateSelectedDiet method is called', () => {
    const selectedDiet = 'nonvegetarian';
    let emittedDiet: string | undefined;

    // Subscribe to the dietSelected event emitter
    component.dietSelected.subscribe(diet => {
      emittedDiet = diet;
    });

    // Call updateSelectedDiet method with the selected diet
    component.updateSelectedDiet(selectedDiet);

    // Check if the selected diet was updated and emitted
    expect(component.selectedDiet).toBe(selectedDiet);
    expect(emittedDiet).toBe(selectedDiet);
  });
});