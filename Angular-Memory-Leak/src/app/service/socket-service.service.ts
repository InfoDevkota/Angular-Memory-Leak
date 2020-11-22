import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import * as Socket from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketServiceService {

  private socket;
  private url = "http://localhost:5050";

  newUser: Observable<any>;
  newRequest: Observable<any>;

  constructor() {
    this.socket = Socket.io(this.url);

    this.newUser = new Observable((observable) =>{
      this.socket.on("newUser", (data:any)=>{
        observable.next(data);
      })
    })

    this.newRequest = new Observable((observable) =>{
      this.socket.on("newRequest", (data:any)=>{
        observable.next(data);
      })
    })
  }

  getNewUser = () =>{
    return this.newUser;
  }

  getNewRequest = () =>{
    return this.newRequest;
  }
}
