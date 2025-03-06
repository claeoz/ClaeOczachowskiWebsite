import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MystComponent } from './myst.component';

describe('MystComponent', () => {
  let component: MystComponent;
  let fixture: ComponentFixture<MystComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MystComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MystComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
