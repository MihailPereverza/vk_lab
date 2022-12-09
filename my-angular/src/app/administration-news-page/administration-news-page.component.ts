import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {WebSocketService} from "../shared/services/web-socket.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-administration-news-page',
  templateUrl: './administration-news-page.component.html',
  styleUrls: ['./administration-news-page.component.css']
})
export class AdministrationNewsPageComponent implements OnInit {
  news: any = []
  trigger = 1
  newsSize: number
  user: any
  userName: string = ''
  displayedColumns = ['firstName', 'lastName', 'text', 'date']

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private webSocketService: WebSocketService,
              private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient) {
    let userId
    this.route.params.subscribe(
      (params: Params) => {
        userId = params['id']
      }
    )
    console.log(userId)
    this.http.get(`/api/users/lnews/${userId}`).subscribe((res: any
    ) => {
      console.log(res)
      this.news = res.reverse().slice(0, 7)
      this.newsSize = this.news.length
    })

    this.http.get(`/api/users/${userId}`).subscribe((res: any) => {
      this.user = res
      this.userName = `${res.firstName} ${res.lastName}`
    })
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.http.get(`/api/users/0`).subscribe((res: any) => {
          this.webSocketService.join({room: res.id})
        })

        this.webSocketService.listen('news').subscribe((data) => {
          console.log(data)
          this.news.unshift(data)
          this.news = [...this.news.slice(0, 7)]
        })
      }
    )
  }

  goToAdministration() {
    this.router.navigate(['/administration'])
  }
}
