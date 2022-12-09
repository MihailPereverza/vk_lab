import {Component, OnInit} from '@angular/core';
import {WebSocketService} from "../shared/services/web-socket.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-message-page',
  templateUrl: './message-page.component.html',
  styleUrls: ['./message-page.component.css']
})
export class MessagePageComponent implements OnInit{
  message: string[]

  constructor(private webSocketService: WebSocketService,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
    let userId
    this.route.params.subscribe(
      (params: Params) => {
        userId = params['id']

        this.webSocketService.join({room: userId})

        this.webSocketService.listen('message').subscribe((data) => {
          console.log(data)
        })
      }
    )



  }
}
