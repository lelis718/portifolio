import { Component, OnInit } from '@angular/core';
import { MatIconRegistry  } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'footer-contact',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

	constructor(
		private matIconRegistry: MatIconRegistry ,
		private domSanitizer: DomSanitizer
	) { }

	ngOnInit() {
		this.matIconRegistry.addSvgIcon(
			"linkedin",
			this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/linkedin-brands.svg")
		);		
		this.matIconRegistry.addSvgIcon(
			"hackerrank",
			this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/hackerrank-brands.svg")
		);		
		this.matIconRegistry.addSvgIcon(
			"stackoverflow",
			this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/stack-overflow-brands.svg")
		);		
		this.matIconRegistry.addSvgIcon(
			"reddit",
			this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/reddit-square-brands.svg")
		);		
	}

}
