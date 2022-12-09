import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-user-table-status',
  templateUrl: './user-table-status.component.html',
  styleUrls: ['./user-table-status.component.css']
})
export class UserTableStatusComponent implements OnInit {
  statuses: any = {
    "1": "Не подтвержденный",
    "2": "Активный",
    "3": "Заблокированный"
  }
  ids: any
  defaultSelect!: string

  @Input()
  status!: string
  @Input()
  userId!: any

  constructor(private http: HttpClient) {
    this.ids = Object.keys(this.statuses)
  }

  ngOnInit(): void {
    this.ids = Object.keys(this.statuses)
    this.defaultSelect = this.status
  }

  onChange(event: any) {
    console.log(event)
    this.http.post('/api/statuses', {userId: this.userId, status: event.value}).subscribe((res) => {
      console.log(res)
    })
  }
}
