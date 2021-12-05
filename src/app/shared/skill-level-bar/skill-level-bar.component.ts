import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'skill-level-bar',
  templateUrl: './skill-level-bar.component.html',
  styleUrls: ['./skill-level-bar.component.scss']
})
export class SkillLevelBarComponent implements OnInit {

  @Input() level:string = "";
  
  constructor() { }

  ngOnInit() {
  }

}
