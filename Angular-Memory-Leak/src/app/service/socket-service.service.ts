import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import * as Socket from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketServiceService {

  private socket;
  private url = "http://localhost:5050";

  constructor() {
    this.socket = Socket.io(this.url);
  }

  getNewUser = () =>{
    //log
    let aObservable = new Observable(((observable) =>{
      this.socket.on("newUser", (data:any)=>{
        observable.next(data);
      })
    }))
    return aObservable;
  }

  getNewRequest = () =>{
    let aObservable = new Observable(((observable) =>{
      this.socket.on("newRequest", (data:any)=>{
        observable.next(data);
      })
    }))
    return aObservable;
  }
}
