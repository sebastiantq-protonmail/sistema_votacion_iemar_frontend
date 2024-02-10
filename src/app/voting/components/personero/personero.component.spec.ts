import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersoneroComponent } from './personero.component';

describe('PersoneroComponent', () => {
  let component: PersoneroComponent;
  let fixture: ComponentFixture<PersoneroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersoneroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersoneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
