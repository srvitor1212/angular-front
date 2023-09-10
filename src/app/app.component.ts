import { Component } from '@angular/core';
import { HeaderlinksComponent } from './headerlinks/headerlinks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderlinksComponent,
  ],
  template: `

    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
        <span class="fs-4">Testando o Angular!</span>
      </a>
      <app-headerlinks></app-headerlinks>
    </header>

    <p>App simples para testar a integrar um front-end Angular :)</p>    
    `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Minhas Contas';
}
