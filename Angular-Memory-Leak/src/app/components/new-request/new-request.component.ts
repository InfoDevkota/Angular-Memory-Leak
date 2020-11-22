import { Component, OnInit } from '@angular/core';
import { SocketServiceService } from 'src/app/service/socket-service.service';

@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.css']
})
export class NewRequestComponent implements OnInit {

  requests: any = [];

  constructor(
    private socketService: SocketServiceService 
  ) { }

  ngOnInit(): void {
    this.socketService.getNewRequest().subscribe((data:any)=>{
      console.log(data);
      this.requests.unshift(data)
    })
  }

}
