import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalMediaEntryComponent } from './personal-media-entry.component';

describe('PersonalMediaEntryComponent', () => {
  let component: PersonalMediaEntryComponent;
  let fixture: ComponentFixture<PersonalMediaEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalMediaEntryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalMediaEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
