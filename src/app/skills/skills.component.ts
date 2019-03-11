import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

	constructor(
		private matIconRegistry: MatIconRegistry,
		private domSanitizer: DomSanitizer
	) { }

	ngOnInit() {

		this.matIconRegistry.addSvgIcon("android",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/skills/android-svgrepo-com.svg"));
		this.matIconRegistry.addSvgIcon("angularjs",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/skills/angularjs.svg"));
		this.matIconRegistry.addSvgIcon("angular",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/skills/Angular_full_color_logo.svg"));
		this.matIconRegistry.addSvgIcon("php",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/skills/Antu_php.svg"));
		this.matIconRegistry.addSvgIcon("apple",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/skills/Apple_Computer_Logo_rainbow.svg"));
		this.matIconRegistry.addSvgIcon("bower",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/skills/bower-logo.svg"));
		this.matIconRegistry.addSvgIcon("c#",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/skills/csharp.svg"));
		this.matIconRegistry.addSvgIcon("css3",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/skills/CSS3_logo_and_wordmark.svg"));
		this.matIconRegistry.addSvgIcon("docker",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/skills/Docker.svg"));
		this.matIconRegistry.addSvgIcon("flash",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/skills/flashplayer_app_RGB.svg"));
		this.matIconRegistry.addSvgIcon("gulp",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/skills/Gulp.js_Logo.svg"));
		this.matIconRegistry.addSvgIcon("heroku",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/skills/heroku.svg"));
		this.matIconRegistry.addSvgIcon("html5",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/skills/HTML5_logo_and_wordmark.svg"));
		this.matIconRegistry.addSvgIcon("ionic",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/skills/ionic.svg"));
		this.matIconRegistry.addSvgIcon("jenkins",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/skills/Jenkins_logo.svg"));
		this.matIconRegistry.addSvgIcon("jquery",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/skills/jquery.svg"));
		this.matIconRegistry.addSvgIcon("cordova",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/skills/logo-cordova.svg"));
		this.matIconRegistry.addSvgIcon(".net",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/skills/netframework.svg"));
		this.matIconRegistry.addSvgIcon("node",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/skills/Node.js_logo.svg"));
		this.matIconRegistry.addSvgIcon("npm",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/skills/Npm-logo.svg"));
		this.matIconRegistry.addSvgIcon("python",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/skills/Python-logo-notext.svg"));
		this.matIconRegistry.addSvgIcon("react",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/skills/React-icon.svg"));
		this.matIconRegistry.addSvgIcon("unity",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/skills/unity-3d-vector-icon-logo.svg"));
		this.matIconRegistry.addSvgIcon("javascript",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/skills/Unofficial_JavaScript_logo_2.svg"));
		this.matIconRegistry.addSvgIcon("webpack",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/skills/webpack.svg"));
		this.matIconRegistry.addSvgIcon("windows-phone",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/skills/windows-phone.svg"));
		
	}
}
