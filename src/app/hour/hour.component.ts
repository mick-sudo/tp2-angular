import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hour',
  templateUrl: './hour.component.html',
  styleUrls: ['./hour.component.css']
})
export class HourComponent implements OnInit {

  @Input()
  hour!: Date;
  @Input()
  ville!: string;

  constructor() { }

  ngOnInit(): void {

  }

}
