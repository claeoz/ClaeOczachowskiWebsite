import { Component } from '@angular/core';
import { PersonalMediaEntryComponent } from "../personal-media-entry/personal-media-entry.component";

@Component({
  selector: 'home',
  imports: [PersonalMediaEntryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
