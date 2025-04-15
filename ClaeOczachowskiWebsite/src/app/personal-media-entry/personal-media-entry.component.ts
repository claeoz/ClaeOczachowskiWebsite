import { Component, input, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personal-media-entry',
  imports: [CommonModule],
  templateUrl: './personal-media-entry.component.html',
  styleUrl: './personal-media-entry.component.css'
})
export class PersonalMediaEntryComponent {
  @Input() title: string = 'failed to load title';
  @Input() author: string = 'failed to load author';
  @Input() linkTo: string = 'failed to load link';
}
