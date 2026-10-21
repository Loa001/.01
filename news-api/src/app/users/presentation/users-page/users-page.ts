import { Component, inject, OnInit } from '@angular/core';
import { UsersStore } from '../../application/users.store';

@Component({
  imports: [],
  selector: 'app-users-page',
  styleUrl: './users-page.css',
  templateUrl: './users-page.html',
})
export class UsersPage implements OnInit {

  protected readonly store = inject(UsersStore);

  ngOnInit(): void {
    this.store.loadUsers();
  }
}