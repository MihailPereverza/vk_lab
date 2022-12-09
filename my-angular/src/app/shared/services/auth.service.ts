import {Injectable} from "@angular/core";
import {RegisterUser, User} from "../interfaces";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string = ''
  userId: any

  constructor(private http: HttpClient) {
  }

  login(user: User): Observable<{ token: string }> {
    this.http.get('/api/users/0').subscribe((res: any) => {
      localStorage.setItem('auth-user-id', res.id)
      this.userId = res.id
    })
    return this.http.post<{ token: string }>('/api/auth/login', user)
      .pipe(
        tap(({token}) => {
          localStorage.setItem('auth-token', token)
          this.setToken(token)
        })
      )
  }

  register(user: RegisterUser): Observable<RegisterUser> {
    return this.http.post<RegisterUser>('/api/auth/register', user)
  }

  setToken(token: string) {
    this.token = token
  }

  getToken(): string {
    return this.token
  }

  isAuthenticated(): boolean {
    return !!this.token
  }

  logout() {
    this.setToken('')
    localStorage.removeItem('auth-token')
  }
}
