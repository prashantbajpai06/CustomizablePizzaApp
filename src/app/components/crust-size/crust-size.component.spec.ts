import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrustSizeComponent } from './crust-size.component';

describe('CrustSizeComponent', () => {
  let component: CrustSizeComponent;
  let fixture: ComponentFixture<CrustSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrustSizeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrustSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
