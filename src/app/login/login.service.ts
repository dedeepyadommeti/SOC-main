import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user';

const USERS = [
    new User(1, 'Teja', 'Teja@509'),
    new User(2, 'user2', 'user2')
];
const usersObservable = of(USERS);

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    private isLoggedIn = false;

    getAllUsers(): Observable<User[]> {
        return usersObservable;
    }

    isUserAuthenticated(username: string, password: string): Observable<boolean> {
        return this.getAllUsers().pipe(
            map(users => {
                const authenticatedUser = users.find(user => 
                    user.username === username && user.password === password
                );
                this.isLoggedIn = !!authenticatedUser; 
                return this.isLoggedIn;
            })
        );
    }

    isUserLoggedIn(): boolean {
        return this.isLoggedIn;
    }
}
