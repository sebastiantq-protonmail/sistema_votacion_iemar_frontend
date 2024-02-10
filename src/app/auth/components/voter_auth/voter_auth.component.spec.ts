import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoterAuthComponent } from './voter_auth.component';

describe('VoterAuthComponent', () => {
  let component: VoterAuthComponent;
  let fixture: ComponentFixture<VoterAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoterAuthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoterAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
