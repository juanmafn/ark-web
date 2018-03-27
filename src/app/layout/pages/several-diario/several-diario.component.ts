import { Component, OnInit } from '@angular/core';
import { SeriesDto } from '../../../model/SeriesDto';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-several-diario',
  templateUrl: './several-diario.component.html'
})
export class SeveralDiarioComponent implements OnInit {

  public value: Date = new Date();

  year: number = this.value.getFullYear();
  month: number = this.value.getMonth() + 1;
  day: number = this.value.getDate();

  titleLineChart: string;
  titleColumnChart: string;
  titleDonutChart: string;
  dataSource: SeriesDto;
  categories: string[] = [
    '00:00', '01:00', '02:00', '03:00', '04:00', '05:00',
    '06:00', '07:00', '08:00', '09:00', '10:00', '11:00',
    '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
    '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'
  ];
  categoriaTitle: string = 'Hora';

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.apiService.getSeveralDiario(this.year, this.month, this.day)
    .then(res => {
      this.dataSource = res;
      
      this.titleLineChart = `Horas jugadas por cada jugador el ${this.dataSource.fecha}`;
      this.titleColumnChart = `Horas totales jugadas de cada jugador el ${this.dataSource.fecha}`;
      this.titleDonutChart = `Proporción de horas totales jugadas por los jugadores el ${this.dataSource.fecha}`;
    })
    .catch(error => {});
  }

  public onChange(value: Date): void {
    localStorage.setItem('fecha', value.toDateString());
    this.year = value.getFullYear();
    this.month = value.getMonth() + 1;
    this.day = value.getDate();
    this.getData();
  }

}
