import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    standalone: false
})
export class HeaderComponent {   
  isNavActive = false;

  @ViewChild('navLinks', { static: false }) navLinks!: ElementRef ;
  @ViewChild('burger', { static: false }) burger!: ElementRef ;

  toggleNav() {
    this.isNavActive = !this.isNavActive;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    if (this.isNavActive && 
        !this.navLinks.nativeElement.contains(event.target) && 
        !this.burger.nativeElement.contains(event.target)) {
      this.isNavActive = false;
    }
  }
}
