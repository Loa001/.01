import { Component, inject, OnInit } from '@angular/core';
import { UsersStore } from '../../../users/application/users.store';

@Component({
  imports: [],
  selector: 'app-clients-page',
  styleUrl: './clients-page.css',
  templateUrl: './clients-page.html',
})
export class ClientsPage implements OnInit {

  protected readonly store = inject(UsersStore);

  ngOnInit(): void {
    if (this.store.users().length === 0) {
      this.store.loadUsers();
    }
  }
}