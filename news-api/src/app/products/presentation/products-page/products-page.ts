import { Component, inject, OnInit } from '@angular/core';
import { UsersStore } from '../../../users/application/users.store';

@Component({
  imports: [],
  selector: 'app-products-page',
  styleUrl: './products-page.css',
  templateUrl: './products-page.html',
})
export class ProductsPage implements OnInit {

  protected readonly store = inject(UsersStore);

  ngOnInit(): void {
    if (this.store.users().length === 0) {
      this.store.loadUsers();
    }
  }
}