import { computed, inject, Service, signal } from '@angular/core';
import { UsersApi } from '../infrastructure/api/users-api';
import { User } from '../domain/model/user.entity';
import { finalize } from 'rxjs';

@Service()
export class UsersStore {

    private readonly usersApi = inject(UsersApi);

    private readonly usersState = signal<User[]>([]);
    private readonly loadingState = signal<boolean>(false);
    private readonly errorState = signal<string>('');

    readonly users = computed(() => this.usersState());
    readonly loading = computed(() => this.loadingState());
    readonly error = computed(() => this.errorState());

    loadUsers(): void {
        this.loadingState.set(true);
        this.errorState.set('');

        this.usersApi.getUsers()
        .pipe(
            finalize(() => this.loadingState.set(false))
        )
        .subscribe({
            next: (users) => {
            this.usersState.set(users);
            },
            error: (error) => {
            this.errorState.set(error.message);
            }
        });
    }

}
