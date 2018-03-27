import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html'
})
export class LineChartComponent implements OnInit {

  @Input() title: string;
  @Input() series: any[];
  @Input() categories: string[];
  @Input() categoryTitle: string;

  constructor(public router: Router) { }

  ngOnInit() { }

  onLegendItemClick(event) {
    localStorage.setItem('player', event.text);
    if (event.series.data.length == 12) {
      this.router.navigate(['/single-anual', event.text]);
    } else if (event.series.data.length == 24) {
      this.router.navigate(['/single-diario', event.text]);
    } else {
      this.router.navigate(['/single-mensual', event.text]);
    }
  }

}
