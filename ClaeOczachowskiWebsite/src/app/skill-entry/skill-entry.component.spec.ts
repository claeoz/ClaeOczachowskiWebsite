import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillEntryComponent } from './skill-entry.component';

describe('SkillEntryComponent', () => {
  let component: SkillEntryComponent;
  let fixture: ComponentFixture<SkillEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillEntryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
