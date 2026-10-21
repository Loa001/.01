import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { AuthStore } from '../../../../iam/application/auth.store';

@Component({
  imports: [
    MatSidenavContainer,
    MatSidenavContent,
    MatSidenav,
    MatIcon,
    MatListModule,
    RouterLink,
    RouterOutlet
  ],
  selector: 'app-layaout',
  styleUrl: './layaout.css',
  templateUrl: './layaout.html',
})
export class Layaout {

  protected readonly authStore = inject(AuthStore);
  private readonly router = inject(Router);

  readonly collapsed = signal(false);

  toggleMenu(): void {
    this.collapsed.update(valor => !valor);
  }

  logout(): void {
    this.authStore.logout();
    this.router.navigate(['/login']);
  }
}