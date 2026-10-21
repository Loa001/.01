import { computed, Service, signal } from '@angular/core';
import { AuthUser } from '../domain/model/auth-user.entity';

const USERS_KEY = 'users';
const SESSION_KEY = 'currentUser';

@Service()
export class AuthStore {

  private readonly currentUserState = signal<AuthUser | null>(this.loadSession());

  readonly currentUser = computed(() => this.currentUserState());
  readonly isLoggedIn = computed(() => this.currentUserState() !== null);

  register(name: string, email: string, password: string): boolean {
    const users = this.getUsers();

    if (users.some(user => user.email === email)) {
      return false; 
    }

    users.push(new AuthUser(name, email, password));
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    return true;
  }

  login(email: string, password: string): boolean {
    const user = this.getUsers().find(
      u => u.email === email && u.password === password
    );

    if (!user) {
      return false; 
    }

    sessionStorage.setItem(SESSION_KEY, JSON.stringify(user));
    this.currentUserState.set(user);
    return true;
  }

  logout(): void {
    sessionStorage.removeItem(SESSION_KEY);
    this.currentUserState.set(null);
  }

  private getUsers(): AuthUser[] {
    const data = localStorage.getItem(USERS_KEY);
    return data ? JSON.parse(data) : [];
  }

  private loadSession(): AuthUser | null {
    const data = sessionStorage.getItem(SESSION_KEY);
    return data ? JSON.parse(data) : null;
  }
}