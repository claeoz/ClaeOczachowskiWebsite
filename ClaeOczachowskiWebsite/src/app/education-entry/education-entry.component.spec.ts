import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationEntryComponent } from './education-entry.component';

describe('EducationEntryComponent', () => {
  let component: EducationEntryComponent;
  let fixture: ComponentFixture<EducationEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationEntryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
