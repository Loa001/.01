import { Component, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatListItem, MatListModule, MatNavList } from '@angular/material/list';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
  imports: [

    MatSidenavContainer,
    MatSidenavContent,
    MatSidenav,
    MatIcon,
    MatNavList,
    MatListItem,
    MatListModule,
    MatSlideToggle,

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


}
