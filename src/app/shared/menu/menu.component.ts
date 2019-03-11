import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'main-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

	@Input() sideMenu:boolean = true;
	@Output() menuItemClick = new EventEmitter();
	
	constructor() { }

	ngOnInit() {
	}
	closeMenu(){
		this.menuItemClick.emit('click');
	}
}
