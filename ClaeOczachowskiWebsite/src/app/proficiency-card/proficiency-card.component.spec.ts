import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProficiencyCardComponent } from './proficiency-card.component';

describe('ProficiencyCardComponent', () => {
  let component: ProficiencyCardComponent;
  let fixture: ComponentFixture<ProficiencyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProficiencyCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProficiencyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
