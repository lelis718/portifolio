import { Directive, OnInit, ElementRef, NgZone } from '@angular/core';

@Directive({
  selector: '[appImageScroller]'
})
export class ImageScrollerDirective implements OnInit {
	
	constructor(private el:ElementRef, private ngZone:NgZone) { }
	private componentSize:number = 0;
	private image1Elm:any;
	private image2Elm:any;
	private container:any;

	ngOnInit(): void {
		this.image1Elm = this.el.nativeElement.childNodes[0];
		this.image2Elm = this.el.nativeElement.childNodes[1];

		this.componentSize = this.el.nativeElement.parentElement.getBoundingClientRect().height;
		this.container = this.el.nativeElement.parentElement.parentElement;

		this.ngZone.runOutsideAngular(()=>{
			console.log("Rodando fora do angular");
			this.el.nativeElement.parentElement.addEventListener('scroll', this.scroll)
		});
		console.log("Inicializando diretiva", this.el);

	}

	scroll = (event:any): void => {

	   const offset = event.srcElement.scrollTop / this.componentSize;
	   if(offset<1){
		   this.container.classList.remove("fix-to-top");
		   this.image2Elm.style.opacity = offset;
		} else if(offset > 1.6) {
			this.container.classList.add("fix-to-top");
		} else{
			this.container.classList.remove("fix-to-top");
		}
    };   	
}
