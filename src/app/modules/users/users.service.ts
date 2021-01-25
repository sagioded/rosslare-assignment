import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as data from './users.json';
import { User } from "../../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private _loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private _users: BehaviorSubject<User[]> = new BehaviorSubject<User[]>(null);
  private _pages: BehaviorSubject<User[]> = new BehaviorSubject<User[]>(null);

  private _currentUser: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  private _page: number = 1;
  private _pageSize: number = 10;

  get page(): number { return this._page; }
  set page(val: number) { this._page = val; }

  get pageSize(): number { return this._pageSize; }
  set pageSize(val: number) { this._pageSize = val; }

  loading$: Observable<boolean> = this._loading.asObservable();
  users$: Observable<User[]> = this._users.asObservable();
  pages$: Observable<User[]> = this._pages.asObservable();

  currentUser$: Observable<User> = this._currentUser.asObservable();

  constructor(private http: HttpClient) {

  }

  load(): void {
    of(data['default'])
      .subscribe(result => {
        this._users.next(result);
        this._pages.next(this.paginate(result));
      },
        err => {
          console.log(err);
        });
  }

  loadUser(index: number, onLoad?: Function) {
    this._loading.next(true);
    setTimeout(() => {
      const user = this._users.value[index];
      this._currentUser.next(user);
      this._loading.next(false);

      if (onLoad) {
        onLoad();
      }
    }, 400);
  }

  refresh(): void {
    const users = this._users.value;
    this._pages.next(this.paginate(users));
  }

  private paginate(users: User[]): User[] {
    return users.slice((this._page - 1) * this._pageSize, (this._page - 1) * this._pageSize + this._pageSize)
  }
}
