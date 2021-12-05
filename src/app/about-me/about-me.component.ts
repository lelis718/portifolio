import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  
  public xpYears:number = 0;
  constructor() { }

  ngOnInit() {
	  this.xpYears = new Date().getFullYear() - 2002;
  }

}
