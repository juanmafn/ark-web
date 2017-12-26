import { Component, OnInit } from '@angular/core';
import { SeriesDto } from '../../../model/SeriesDto';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-several-diario',
  templateUrl: './several-diario.component.html'
})
export class SeveralDiarioComponent implements OnInit {

  year: number = 2017;
  month: number = 11;
  day: number = 15;

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
    this.apiService.getSeveralDiario(this.year, this.month, this.day)
      .then(res => {
        this.dataSource = res;
        
        this.titleLineChart = `Horas jugadas por cada jugador el ${this.dataSource.fecha}`;
        this.titleColumnChart = `Horas totales jugadas de cada jugador el ${this.dataSource.fecha}`;
        this.titleDonutChart = `Proporción de horas totales jugadas por los jugadores el ${this.dataSource.fecha}`;
      })
      .catch(error => {});
  }

}
