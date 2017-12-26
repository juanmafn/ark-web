import { Component, OnInit } from '@angular/core';
import { SeriesDto } from '../../../model/SeriesDto';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-several-mensual',
  templateUrl: './several-mensual.component.html'
})
export class SeveralMensualComponent implements OnInit {

  year: number = 2017;
  month: number = 11;

  titleLineChart: string;
  titleColumnChart: string;
  titleDonutChart: string;
  dataSource: SeriesDto;
  categories: string[] = [
    '01/11', '02/11', '03/11', '04/11', '05/11', '06/11', '07/11', '08/11', '09/11', '10/11',
    '11/11', '12/11', '13/11', '14/11', '15/11', '16/11', '17/11', '18/11', '19/11', '20/11',
    '21/11', '22/11', '23/11', '24/11', '25/11', '26/11', '27/11', '28/11', '29/11', '30/11'];
  categoriaTitle: string = 'Día';

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getSeveralMensual(this.year, this.month)
      .then(res => {
        this.dataSource = res;

        this.titleLineChart = `Horas jugadas por cada jugador en ${this.dataSource.fecha}`;
        this.titleColumnChart = `Horas totales jugadas de cada jugador en ${this.dataSource.fecha}`;
        this.titleDonutChart = `Proporción de horas totales jugadas por los jugadores en ${this.dataSource.fecha}`;
      })
      .catch(error => {});
  }

}
