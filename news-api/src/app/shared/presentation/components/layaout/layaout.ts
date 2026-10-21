import { Component, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { RouterLink, RouterOutlet } from '@angular/router';

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

  readonly collapsed = signal(false);

  toggleMenu(): void {
    this.collapsed.update(valor => !valor);
  }

  logout(): void {
  }


}
