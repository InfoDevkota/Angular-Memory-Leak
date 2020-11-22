import { Component, OnInit } from '@angular/core';
import { SocketServiceService } from 'src/app/service/socket-service.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  users: any = [];

  subscriptions = [];

  constructor(
    private socketService: SocketServiceService 
  ) { }

  ngOnInit(): void {
    let aSubScription = this.socketService.getNewUser().subscribe((data:any)=>{
      console.log(data);
      this.users.unshift(data)
    })
    this.subscriptions.push(aSubScription);
  }

  ngOnDestroy(): void{
    // console.log("On Destroy called");
    this.subscriptions.forEach(element => {
      element.unsubscribe();
    });
    
  }


}
