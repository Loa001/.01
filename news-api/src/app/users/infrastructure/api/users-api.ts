import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { UserAssembler } from './user-assembler';
import { environment } from '../../../../environments/environment.development';
import { map, Observable } from 'rxjs';
import { User } from '../../domain/model/user.entity';
import { UserResource } from './user-response';

@Service()
export class UsersApi {

    private readonly http = inject (HttpClient);
    private readonly assembler = inject(UserAssembler);
    private readonly endPoint = `${environment.usersApiBaseURL}${environment.usersApiEndPoint}`;

    getUsers(): Observable<User[]> {
    return this.http.get<UserResource[]>(this.endPoint).pipe(
      map(resources => this.assembler.toEntities(resources))
    );
    }
}
