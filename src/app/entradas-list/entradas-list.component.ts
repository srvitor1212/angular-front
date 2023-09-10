import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IEntradas } from '../ientradas';

@Component({
  selector: 'app-entradas-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      {{ entradasList.id }}
      {{ entradasList.nome }}
      {{ entradasList.valor }}
      {{ entradasList.dataVigencia }}
    </p>
  `,
  styleUrls: ['./entradas-list.component.css']
})
export class EntradasListComponent {
  @Input() entradasList!: IEntradas;
}
