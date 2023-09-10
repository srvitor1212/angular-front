import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>App simples para testar e integrar um front-end Angular :)</p>
    <p>
      Navegue entre as opções para começar
    </p>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
