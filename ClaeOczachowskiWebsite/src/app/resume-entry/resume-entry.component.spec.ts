import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeEntryComponent } from './resume-entry.component';

describe('ResumeEntryComponent', () => {
  let component: ResumeEntryComponent;
  let fixture: ComponentFixture<ResumeEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeEntryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
