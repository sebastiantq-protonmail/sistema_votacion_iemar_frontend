import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionAuthComponent } from './institution_auth.component';

describe('InstitutionAuthComponent', () => {
  let component: InstitutionAuthComponent;
  let fixture: ComponentFixture<InstitutionAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstitutionAuthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstitutionAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
