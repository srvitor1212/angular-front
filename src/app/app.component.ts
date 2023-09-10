import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderlinksComponent } from './headerlinks/headerlinks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderlinksComponent,
    RouterModule,
  ],
  template: `

    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a [routerLink]="['/']" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
        <span class="fs-4">Testando o Angular!</span>
      </a>
      <app-headerlinks></app-headerlinks>
    </header>

    <p>App simples para testar a integrar um front-end Angular :)</p>    
    
    <main>
    <!-- 
      <a [routerLink]="['/']">
        <header class="brand-name">
          <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
        </header>
      </a>
      -->

      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>

    `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Minhas Contas';
}
