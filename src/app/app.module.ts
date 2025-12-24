import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { BookingsComponent } from './pages/bookings/bookings.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {  NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { BusSearchComponent } from './searchThings/bus-search/bus-search.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {  MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { LoaderPageComponent } from './loader/loader-page/loader-page.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SortPipe } from './sort.pipe';
import { DatePipe, NgClass } from '@angular/common';
import { SeatdekerComponent } from './pages/bookings/deker/seatdeker/seatdeker.component';
import { AddcommaPipe } from './pipes/addcomma.pipe';
import { AmenetiesComponent } from './pages/bookings/ameneties/ameneties/ameneties.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    BookingsComponent,
    FooterComponent,  
    HeaderComponent,
    BusSearchComponent,
    LoaderPageComponent,
    AboutUsComponent,
    SortPipe,
    SeatdekerComponent,
    AddcommaPipe,
    AmenetiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbCarouselModule,
    FormsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatCardModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    HttpClientModule,
    NgClass

  
    
    
    // NgxMaterialTimepickerModule,
    // NgxMatDatetimePickerModule,
    // NgxMatTimepickerModule,
  
  ],
  providers: [
    provideAnimationsAsync(),
    DatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
