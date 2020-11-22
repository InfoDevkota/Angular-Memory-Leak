import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-request-item',
  templateUrl: './new-request-item.component.html',
  styleUrls: ['./new-request-item.component.css']
})
export class NewRequestItemComponent implements OnInit {

  @Input()request;
  //{
  //   name: "name",
  //   request: "",
  //   data: "date"
  // }


  constructor() { }

  ngOnInit(): void {
  }

}
