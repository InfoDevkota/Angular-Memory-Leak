import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-user-item',
  templateUrl: './new-user-item.component.html',
  styleUrls: ['./new-user-item.component.css']
})
export class NewUserItemComponent implements OnInit {

  @Input()user;
  //{
  //   name: "name",
  //   data: "date"
  // }


  constructor() { }

  ngOnInit(): void {
  }

}
