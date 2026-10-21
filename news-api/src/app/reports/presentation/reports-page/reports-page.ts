import { Component, inject, OnInit } from '@angular/core';
import { UsersStore } from '../../../users/application/users.store';

@Component({
  imports: [],
  selector: 'app-reports-page',
  styleUrl: './reports-page.css',
  templateUrl: './reports-page.html',
})
export class ReportsPage implements OnInit {

  protected readonly store = inject(UsersStore);

  ngOnInit(): void {
    if (this.store.users().length === 0) {
      this.store.loadUsers();
    }
  }
}