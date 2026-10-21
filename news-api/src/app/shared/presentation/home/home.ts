import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { AuthStore } from '../../../iam/application/auth.store';

@Component({
  imports: [RouterLink, MatIcon],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {

  protected readonly authStore = inject(AuthStore);

  protected readonly sections = [
    { label: 'Clientes', icon: 'people', route: '/dashboard/clientes' },
    { label: 'Empleados', icon: 'badge', route: '/dashboard/empleados' },
    { label: 'Productos', icon: 'inventory_2', route: '/dashboard/productos' },
    { label: 'Reportes', icon: 'bar_chart', route: '/dashboard/reportes' },
    { label: 'Usuarios', icon: 'group', route: '/dashboard/usuarios' },
  ];
}