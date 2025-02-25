import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar1',
  standalone: true,
  imports: [MatMenuModule,
    MatTabsModule,
            RouterModule
  ],
  templateUrl: './navbar1.component.html',
  styleUrl: './navbar1.component.css'
})
export class Navbar1Component {
  selectedCurrency: string = 'USD';  // Valor inicial da moeda
  selectedLanguage: string = 'EN';   // Valor inicial do idioma

  // Atualiza a moeda selecionada
  selectCurrency(currency: string) {
    this.selectedCurrency = currency;
  }

  // Atualiza o idioma selecionado
  selectLanguage(language: string) {
    this.selectedLanguage = language;
  }
}
