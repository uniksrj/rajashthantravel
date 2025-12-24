import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    standalone: false
})
export class AppComponent implements OnInit{

  constructor(private router: Router, private viewportScroller: ViewportScroller) { }
  title = 'rajashthanTravel';
  isLoading:boolean | undefined = true;

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.viewportScroller.scrollToPosition([0, 0]);
      }
    });
    setTimeout(() => {
      this.isLoading = false;
    }, 2000); 
  }

  busDetailsArray = [
    {
      name: 'Yolo Bus',
      type: 'VE A/C Seater / Sleeper (2+1)',
      departureTime: '22:27',
      departureLocation: 'Bus Stand',
      duration: '06h 33m',
      arrivalTime: '05:00',
      arrivalDate: '11-Jul',
      arrivalLocation: 'ISBT Kashmiri Gate',
      rating: 4.6,
      reviews: 421,
      price: 540,
      seatsAvailable: 28,
      singleSeats: 10,
      amenities: 'Live Tracking'
    },
    {
      name: 'Yolo Bus',
      type: 'VE A/C Seater / Sleeper (2+1)',
      departureTime: '22:27',
      departureLocation: 'Bus Stand',
      duration: '06h 33m',
      arrivalTime: '05:00',
      arrivalDate: '11-Jul',
      arrivalLocation: 'ISBT Kashmiri Gate',
      rating: 4.6,
      reviews: 421,
      price: 540,
      seatsAvailable: 28,
      singleSeats: 10,
      amenities: 'Live Tracking'
    },
  ];
}
