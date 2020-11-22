import { Component, OnInit } from '@angular/core';
import { SocketServiceService } from 'src/app/service/socket-service.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  users: any = [];

  constructor(
    private socketService: SocketServiceService 
  ) { }

  ngOnInit(): void {
    this.socketService.getNewUser().subscribe((data:any)=>{
      console.log(data);
      this.users.unshift(data)
    })
  }


}
