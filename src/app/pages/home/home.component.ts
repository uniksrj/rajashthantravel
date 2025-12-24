import { Component, HostListener, Renderer2, ViewEncapsulation } from '@angular/core';
import $ from 'jquery';
import Swiper from 'swiper';
import { Autoplay, Pagination, Navigation  } from 'swiper/modules';
// import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
Swiper.use([Autoplay, Pagination, Navigation ]);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
  heading_txt: string = "We Give Trust"
  dir: string = 'assets/bus.jpg';
  bus: string = 'assets/green bus.png';
  back_bus: string = 'assets/busPotarit.jpg';

  // slideConfig = {
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   dots: true,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: true
  //       }
  //     }
  //   ]
  // };

  slides = [
    { icon: 'fas fa-wifi', text: 'Unlimited WiFi' },
    { icon: 'fas fa-bed', text: 'Sleeper Couch' },
    { icon: 'fas fa-bottle-water', text: 'Drinking Water' },
    { icon: 'fas fa-mug-hot', text: 'Hot Beverages' },
    { icon: 'fas fa-tv', text: 'TV' },
    { icon: 'fas fa-plug', text: 'Charger Plug' },
    { icon: 'fas fa-bottle-water', text: 'Drinking Water' },
    { icon: 'fas fa-door-open', text: 'Emergency Exit' }
  ];

  constructor(private renderer: Renderer2) { } 

  private swiper!: Swiper;
  width = window.innerWidth;


  ngAfterViewInit() {
   this.initSwiper();
  }

  @HostListener('window:resize')
  onResize(){
    if (this.swiper) {
      this.swiper.params.slidesPerView = this.getSlidesPerView();
      this.swiper.update();
    }
  }
  getSlidesPerView(): number {
    if (this.width < 768) return 1;
    if (this.width < 1024) return 2;
    return 4;
  }

    private initSwiper(): void {
    this.swiper = new Swiper('.mySwiper', {
      slidesPerView: this.getSlidesPerView(),
      spaceBetween: 10,
      loop: true,
      autoplay: { delay: 10000, disableOnInteraction: false },
      pagination: { el: '.swiper-pagination', clickable: true },
      breakpoints: {
        320: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      },
    });
  }

}
