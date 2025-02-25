import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Navbar1Component } from './navbar1/navbar1.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';  // IMPORTAÇÃO CORRETA
import { NgOptimizedImage } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSlideToggleModule,
    MatMenuModule,
    NgOptimizedImage,
    Navbar1Component,
    Navbar2Component,
    HomeComponent,
    FooterComponent,
    CartComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Correção: "styleUrls" no plural
})
export class AppComponent {
  title = 'ecommerce_eletronicos';
}

