import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementEntryComponent } from './achievement-entry.component';

describe('AchievementEntryComponent', () => {
  let component: AchievementEntryComponent;
  let fixture: ComponentFixture<AchievementEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AchievementEntryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchievementEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
