import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html'
})
export class ColumnChartComponent implements OnInit {

  @Input() title: string;
  @Input() series: any[];
  
  constructor() { }

  ngOnInit() {
  }

}
