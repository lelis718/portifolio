import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './shared/menu/menu.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProfessionalHistoryComponent } from './professional-history/professional-history.component';
import { SkillsComponent } from './skills/skills.component';
import { LabComponent } from './lab/lab.component';
import { AngularMaterialModule } from './angular-material.module';
import { FooterComponent } from './shared/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ImageScrollerDirective } from './shared/image-scroller.directive';
import { SkillLevelBarComponent } from './shared/skill-level-bar/skill-level-bar.component';
import { MatIconModule } from "@angular/material/icon";

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		MenuComponent,
		AboutMeComponent,
		ProfessionalHistoryComponent,
		SkillsComponent,
		LabComponent,
		FooterComponent,
		ImageScrollerDirective,
		SkillLevelBarComponent
	],
	imports: [
		HttpClientModule,
		FlexLayoutModule,
		AngularMaterialModule,
		BrowserAnimationsModule,
		BrowserModule,
		AppRoutingModule,
    MatIconModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
