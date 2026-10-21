import { Routes } from '@angular/router';
import { Layaout } from './shared/presentation/components/layaout/layaout';
import { Home } from './shared/presentation/home/home';
import { Login } from './iam/presentation/login/login';
import { Register } from './iam/presentation/register/register';
import { authGuard } from './iam/infrastructure/auth-guard';
import { ClientsPage } from './clients/presentation/clients-page/clients-page';
import { EmployeesPage } from './employees/presentation/employees-page/employees-page';
import { ProductsPage } from './products/presentation/products-page/products-page';
import { ReportsPage } from './reports/presentation/reports-page/reports-page';
import { UsersPage } from './users/presentation/users-page/users-page';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  {
    path: 'dashboard',
    component: Layaout,
    canActivate: [authGuard],
    children: [
      { path: 'inicio', component: Home },
      { path: 'clientes', component: ClientsPage },
      { path: 'empleados', component: EmployeesPage },
      { path: 'productos', component: ProductsPage },
      { path: 'reportes', component: ReportsPage },
      { path: 'usuarios', component: UsersPage },
      { path: '', redirectTo: 'inicio', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];