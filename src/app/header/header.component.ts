import { Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatListModule} from '@angular/material/list'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule,MatButtonModule,MatToolbarModule,MatSidenavModule,MatTooltipModule,MatListModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HeaderComponent {
  public isExpanded = false;
}

