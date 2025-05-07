import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/dtos/create-user.dto';
import { UpdateUserDto } from 'src/dtos/update-user.dto';
/**
 * Providers can be used to create a service, repository, factories, helpers, etc., that can be injected as a dependency.
 * This means that objects can create varioust relationships with each other, and the function of "wiring up" these objects can largely be delegated to the framework runtime system.
 */
@Injectable()
export class UsersService {

    private users = [
        { id: 1, name: 'Alice', email: 'alice@example.com', role: 'ENGINEER' },
        { id: 2, name: 'Bob', email: 'bob@example.com', role: 'MANAGER' },
        { id: 3, name: 'Charlie', email: 'charlie@example.com', role: 'INTERN' },
        { id: 4, name: 'Diana', email: 'diana@example.com', role: 'ENGINEER' },
        { id: 5, name: 'Eve', email: 'eve@example.com', role: 'MANAGER' },
    ];

    findUsers(role?: 'INTERN' | 'ENGINEER' | 'MANAGER') {
        if (role) {
            return this.users.filter(user => user.role === role);
        }
        return this.users;
    }

    findById(id: number) {
        return this.users.find(user => user.id === id);
    }

    createUser(user: CreateUserDto) {
        //This will be done by the database automatically, so just creating a basic index number here in the meantime
        const newUser = { id: this.users.length + 1, ...user };
        this.users.push(newUser);
        return newUser;
    }

    updateUser(id: number, updateUser: UpdateUserDto) {
        const index = this.users.findIndex(u => u.id === id);
        this.users = this.users.map(user => {
            if (user.id === id) {
                return { ...user, ...updateUser };
            }
            return user;
        });
        return this.findById(id);
    }

    deleteUser(id: number) {
        const user = this.findById(id);

        this.users = this.users.filter(user => user.id !== id);

        return user;
    }

}
