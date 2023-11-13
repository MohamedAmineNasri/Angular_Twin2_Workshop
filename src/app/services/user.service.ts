import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  //decorateur de classe /w9olik raw play the role of service /
  providedIn: 'root', //meta data //providedIn takho 3 value:plateform:ki yabda 3idna sous-projet fih projet
  // root:design pattern syncloton/serive
})
export class UserService {
  constructor(private _http: HttpClient) {
    console.log('je suis un service ya bro');
  }
  getUserFromOb(): Observable<User[]> {
    return this._http.get<User[]>('http://localhost:3000/users'); //get,post,.... lkolha type de retoure observable<object>
  }
  getUser(id: number): Observable<User> {
    return this._http.get<User>('http://localhost:3000/users/' + id);
  }
  addUser(user: User): Observable<User> {
    return this._http.post<User>('http://localhost:3000/users', user); //get,post,.... lkolha type de retoure observable<object>
  }
  updateUser(user: User): Observable<User> {
    return this._http.put<User>('http://localhost:3000/users/' + user.id, user);
  }
  getAllUsers() {
    return [
      {
        id: 1,
        firstName: 'Mila',
        lastName: ' Kunis',
        birthDate: '1999-06-30',
        accountCategory: 'Admin',
        email: 'mila@kunis.com',
        password: 'test',
        picture: 'https://bootdey.com/img/Content/avatar/avatar3.png',
        profession: 'Software Engineer',
      },
      {
        id: 2,
        firstName: 'George',
        lastName: 'Clooney',
        birthDate: '1999-06-30',
        accountCategory: 'Customer',
        email: 'marlon@brando.com',
        password: 'test',
        picture: 'https://bootdey.com/img/Content/avatar/avatar2.png',
        profession: 'Software Engineer',
      },
      {
        id: 3,
        firstName: 'George',
        lastName: 'Clooney',
        birthDate: '1999-06-30',
        accountCategory: 'Customer',
        email: 'marlon@brando.com',
        password: 'test',
        picture: 'https://bootdey.com/img/Content/avatar/avatar1.png',
        profession: 'Software Engineer',
      },
      {
        id: 4,
        firstName: 'Ryan',
        lastName: 'Gossling',
        birthDate: '1999-06-30',
        accountCategory: 'Golden',
        email: 'Ryan@nicholson.com',
        password: 'test',
        picture: 'https://bootdey.com/img/Content/avatar/avatar4.png',
        profession: 'Software Engineer',
      },
      {
        id: 5,
        firstName: 'Robert',
        lastName: 'Downey',
        birthDate: '1999-06-30',
        accountCategory: 'Blocked Account',
        email: 'robert@nicholson.com',
        password: 'test',
        picture: 'https://bootdey.com/img/Content/avatar/avatar5.png',
        profession: 'Software Engineer',
      },
    ];
  }
}
