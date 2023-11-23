import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-component',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  @Input()
  users!: any[];

  ngOnInit(): void {}
  

}