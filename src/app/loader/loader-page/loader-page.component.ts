import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-loader-page',
    templateUrl: './loader-page.component.html',
    styleUrl: './loader-page.component.css',
    standalone: false
})
export class LoaderPageComponent implements OnInit, OnChanges{

 @Input() isLoading: boolean | undefined = true;

  display = true;
  // isFade: any;

  constructor(){}

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['isLoading'] && !changes['isLoading'].firstChange && !this.isLoading){
      this.fadeOut();      
    }
}
  ngOnInit(): void {
      
  }
 

  fadeOut(){
    const preloader = document.querySelector('.preloader-overlay') as HTMLElement;
    if(preloader){
      preloader.style.animation = 'fadeOut 0.6s both';
      setTimeout(() => {
        this.display = false;
      }, 800);
    }
  }

}
