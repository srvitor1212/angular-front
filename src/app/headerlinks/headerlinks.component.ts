import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-headerlinks',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  template: `
  <ul class="nav nav-pills">
    
    <li class="nav-item">
      <a [routerLink]="['/']" class="nav-link active" aria-current="page">Home</a>
    </li>

    <li class="nav-item">
      <a [routerLink]="['/entradas']" class="nav-link">Entradas</a>
    </li>
    
  </ul>
  `,
  styleUrls: ['./headerlinks.component.css']
})
export class HeaderlinksComponent {

}
