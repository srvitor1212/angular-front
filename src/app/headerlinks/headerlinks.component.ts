import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-headerlinks',
  standalone: true,
  imports: [CommonModule],
  template: `
  <ul class="nav nav-pills">
    <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
    <li class="nav-item"><a href="#" class="nav-link">Entradas</a></li>
  </ul>
  `,
  styleUrls: ['./headerlinks.component.css']
})
export class HeaderlinksComponent {

}
