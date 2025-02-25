import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar2', 
  standalone: true,
  imports: [MatTabsModule,
            RouterModule
  ],
  templateUrl: './navbar2.component.html',
  styleUrl: './navbar2.component.css'
})
export class Navbar2Component {

}

export class TabGroupInkBarExample {}