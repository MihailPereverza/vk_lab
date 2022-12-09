import { HttpClient } from '@angular/common/http';
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-table-role',
  templateUrl: './user-table-role.component.html',
  styleUrls: ['./user-table-role.component.css']
})
export class UserTableRoleComponent implements OnInit {
  defaultSelect: string = 'bedolaga'

  @Input()
  isAdministrator = 'false'
  @Input()
  userId: any
  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    console.log(this.isAdministrator)
    if (this.isAdministrator === 'true') this.defaultSelect = 'administrator'
    else  this.defaultSelect = 'bedolaga'
    console.log(this.defaultSelect)
  }

  onChange(event: any) {
    console.log(event)
    this.http.post('/api/users/role', {userId: this.userId, role: event.value}).subscribe((res) => {
      console.log(res)
    })
  }
}
