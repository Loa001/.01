import { Service } from '@angular/core';
import { User } from '../../domain/model/user.entity';
import { UserResource } from './user-response';

@Service()
export class UserAssembler {

    toEntity (resource:UserResource):User {

        return new User(
        resource.id,
        resource.name ?? '',
        resource.username ?? '',
        resource.email ?? '',
        resource.phone ?? '',
        resource.website ?? '',
        resource.address?.city ?? '',
        resource.company?.name ?? ''
    );
    }
    toEntities(resources: UserResource[]): User[] {
    
        return resources.map(resource => this.toEntity(resource));
    }
}