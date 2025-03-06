import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownwardSpiralComponent } from './downward-spiral.component';

describe('DownwardSpiralComponent', () => {
  let component: DownwardSpiralComponent;
  let fixture: ComponentFixture<DownwardSpiralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DownwardSpiralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownwardSpiralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
