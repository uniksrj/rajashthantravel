import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-seatdeker',
    templateUrl: './seatdeker.component.html',
    styleUrl: './seatdeker.component.css',
    standalone: false
})
export class SeatdekerComponent implements OnInit{

  constructor(private http: HttpClient){}
  @Input() busDetails: any;
  busRows: any[] = [];
  // selectedSeats: Set<number> = new Set();
  selectedSeats: number[] = [];
  showSidebar: boolean = false;
  pickupLocation: string = '';
  seatSelected: any = null;
  dropLocation: string = '';
  locations: any[] = [];
  totalPrice: number = 0;
  
  ngOnInit(): void {
    this.loadLocations()      
  }

  totalprice(){
    let totalSeats = this.selectedSeats.length;
    let busPrice = this.busDetails.price;  
      return busPrice * totalSeats;
  }
  
  isSeatSelected(seatNumber: number): boolean {
    return this.selectedSeats.includes(seatNumber);
  }

  toggleSeat(seatNumber: number): void {
    const index = this.selectedSeats.indexOf(seatNumber);
    if (index !== -1) {
      console.log(this.totalPrice); 
      this.selectedSeats.splice(index, 1);
      if (this.selectedSeats.length === 0) {
        this.showSidebar = false;
      }
    } else {
      this.selectedSeats.push(seatNumber);
      console.log(this.totalPrice);
      
      this.showSidebar = true;    
    }
    this.totalPrice = this.totalprice(); 
  }

  loadLocations(): void {
    this.http.get<any[]>('assets/cities.json').subscribe(data => {
      this.locations = data;      
    });
  } 

  proceedToCheckout(): void {
    alert(`Proceeding to checkout for seat ${this.selectedSeats} with pickup at ${this.pickupLocation} and drop at ${this.dropLocation}`);
  }
}
