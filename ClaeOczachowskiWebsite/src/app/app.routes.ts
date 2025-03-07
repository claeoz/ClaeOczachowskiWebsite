import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ScheduleMeetingComponent } from './schedule-meeting/schedule-meeting.component';
import { PersonalProjectComponent } from './personal-project/personal-project.component';
import { DownwardSpiralComponent } from './downward-spiral/downward-spiral.component';
import { MystComponent } from './myst/myst.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'resume', component: ResumeComponent},
    {path: 'about-me', component: AboutMeComponent},
    {path: 'schedule', component: ScheduleMeetingComponent},
    {path: 'personal-project', component: PersonalProjectComponent},
    {path: 'downward-spiral', component: DownwardSpiralComponent},
    {path: 'myst', component: MystComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirect to main page
  { path: '**', redirectTo: 'home' } // Handle unknown paths
];
