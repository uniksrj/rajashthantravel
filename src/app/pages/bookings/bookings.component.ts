import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
    selector: 'app-bookings',
    templateUrl: './bookings.component.html',
    styleUrl: './bookings.component.css',
    standalone: false
})
export class BookingsComponent implements OnInit{

  busDetailsArray = [
    {
      name: 'sikar',
      type: 'VE A/C Seater / Sleeper (2+1)',
      departureTime: '22:27',
      departureLocation: 'sikar',
      duration: '06h 33m',
      arrivalTime: '05:00',
      arrivalDate: '03-Jul-2024',
      arrivalLocation: 'delhi',
      rating: 4.6,
      reviews: 421,
      price: 940,
      seatsAvailable: 28,
      singleSeats: 10,
      amenities: 'Live Tracking',
      seatRows: 10, // Add number of rows
      seatsPerRow: 4 // Add number of seats per row
    },
    {
      name: 'sikar',
      type: 'VE / Sleeper (1)',
      departureTime: '22:27',
      departureLocation: 'sikar',
      duration: '05h 33m',
      arrivalTime: '05:00',
      arrivalDate: '11-Jul-2024',
      arrivalLocation: 'delhi',
      rating: 4.6,
      reviews: 41,
      price: 540,
      seatsAvailable: 28,
      singleSeats: 10,
      amenities: 'Live Tracking',
      seatRows: 10, // Add number of rows
      seatsPerRow: 4 // Add number of seats per row
    },
  ];

  filteredBuses: any[] = [];
  selectedBusIndex: number | null = null;
  selectedAmenities:number | null = null
  
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {          
      const departureLocation = params['departureLocation'];
      const arrivalLocation = params['arrivalLocation'];
      const departureDate = params['departureDate'];
      this.filteredBuses = this.busDetailsArray.filter(bus =>         
        bus.name.includes(departureLocation) && 
        bus.arrivalLocation.includes(arrivalLocation) && 
        bus.arrivalDate === departureDate
      );
    });
    
  }
  viewSeats(index: number): void {
    this.selectedBusIndex = this.selectedBusIndex === index ? null : index;
    this.selectedAmenities = null
  }
  viewamenities(index: number){
    this.selectedAmenities = this.selectedAmenities === index ? null : index;
    this.selectedBusIndex = null;
  }
}
