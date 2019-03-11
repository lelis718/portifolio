import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProfessionalHistoryComponent } from './professional-history/professional-history.component';
import { SkillsComponent } from './skills/skills.component';
import { LabComponent } from './lab/lab.component';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'about-me', component: AboutMeComponent },
	{ path: 'professional-history', component: ProfessionalHistoryComponent },
	{ path: 'skills', component: SkillsComponent },
	{ path: 'lab', component: LabComponent },
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
