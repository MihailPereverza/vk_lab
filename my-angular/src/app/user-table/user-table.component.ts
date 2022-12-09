import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})


export class UserTableComponent implements OnInit{
  displayedColumns = ['id', 'firstName', 'lastName', 'patronymic', 'birthday', 'status', 'role'];
  dataSource: any

  constructor(private http: HttpClient,
              private router: Router,) {
    http.get('/api/users').subscribe((res) => {
      this.dataSource = res
    })
  }

  ngOnInit() {
    console.log(this.dataSource)
  }

  onClick(userId: any) {
    this.router.navigate([`/administration/${userId}`])
  }

  goToNews() {
    this.router.navigate([`/news/my`])
  }
}
