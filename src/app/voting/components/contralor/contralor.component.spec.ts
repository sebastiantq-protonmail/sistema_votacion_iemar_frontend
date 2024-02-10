import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContralorComponent } from './contralor.component';

describe('ContralorComponent', () => {
  let component: ContralorComponent;
  let fixture: ComponentFixture<ContralorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContralorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContralorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
