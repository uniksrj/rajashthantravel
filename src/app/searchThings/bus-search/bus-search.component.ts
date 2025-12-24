import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-bus-search',
    templateUrl: './bus-search.component.html',
    styleUrl: './bus-search.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class BusSearchComponent implements OnInit{

  constructor(private http:HttpClient, private router: Router ,private route: ActivatedRoute,private datetype:DatePipe) {}
  searchCriteria:any = {
    departureLocation: 'sikar',
    arrivalLocation: 'delhi',
    departureDate : new Date()
  };
  locations: any[] = [];
  ngOnInit(): void {
    this.loadLocations()    
  }

  loadLocations(): void {
    this.http.get<any[]>('assets/cities.json').subscribe(data => {
      this.locations = data;      
    });
  }
  
  onSearch(): void {
    console.log(this.searchCriteria);
    const { departureLocation, arrivalLocation, departureDate } = this.searchCriteria;  
    if (departureLocation && arrivalLocation && departureDate) {
      const formattedDate = this.datetype.transform(departureDate, 'dd-MMM-yyyy');
      this.router.navigate(['/bookings'], { queryParams: {departureLocation,arrivalLocation, departureDate: formattedDate} });
    } else {
      alert('Please fill out all fields');
    }
  }

  openDatepicker(picker: MatDatepicker<any>) {
    picker.open();
  }
}
