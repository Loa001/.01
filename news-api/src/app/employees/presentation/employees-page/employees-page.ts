import { Component, inject, OnInit } from '@angular/core';
import { UsersStore } from '../../../users/application/users.store';

@Component({
  imports: [],
  selector: 'app-employees-page',
  styleUrl: './employees-page.css',
  templateUrl: './employees-page.html',
})
export class EmployeesPage implements OnInit {

  protected readonly store = inject(UsersStore);

  ngOnInit(): void {
    if (this.store.users().length === 0) {
      this.store.loadUsers();
    }
  }
}