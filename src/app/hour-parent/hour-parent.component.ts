import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hour-parent',
  templateUrl: './hour-parent.component.html',
  styleUrls: ['./hour-parent.component.css']
})
export class HourParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hours: any[] = [{
    ville: 'paris',
    hour: Date()
  }]

}
