import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietOptionsComponent } from './diet-options.component';

describe('DietOptionsComponent', () => {
  let component: DietOptionsComponent;
  let fixture: ComponentFixture<DietOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DietOptionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DietOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
