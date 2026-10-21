import { Routes } from '@angular/router';
import { Layaout } from './shared/presentation/components/layaout/layaout';
import { UsersPage } from './users/presentation/users-page/users-page';
import { Login } from './iam/presentation/login/login';
import { Register } from './iam/presentation/register/register';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  {
    path: 'dashboard',
    component: Layaout,
    children: [
      { path: 'usuarios', component: UsersPage },
      { path: '', redirectTo: 'usuarios', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];