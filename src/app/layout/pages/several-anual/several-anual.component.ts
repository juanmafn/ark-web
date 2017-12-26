import { Component, OnInit } from '@angular/core';
import { SeriesDto } from '../../../model/SeriesDto';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-several-anual',
  templateUrl: './several-anual.component.html'
})
export class SeveralAnualComponent implements OnInit {

  year: number = 2017;

  titleLineChart: string;
  titleColumnChart: string;
  titleDonutChart: string;
  dataSource: SeriesDto;
  categories: string[] = [
    'Enero', 
    'Febrero', 
    'Marzo', 
    'Abril', 
    'Mayo', 
    'Junio', 
    'Julio', 
    'Agosto', 
    'Septiembre', 
    'Octubre', 
    'Noviembre', 
    'Diciembre'
  ];
  categoriaTitle: string = 'Mes';

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getSeveralAnual(this.year)
      .then(res => {
        this.dataSource = res;

        this.titleLineChart = `Horas jugadas por cada jugador en ${this.dataSource.fecha}`;
        this.titleColumnChart = `Horas totales jugadas de cada jugador en ${this.dataSource.fecha}`;
        this.titleDonutChart = `Proporción de horas totales jugadas por los jugadores en ${this.dataSource.fecha}`;
      })
      .catch(error => {});
  }

}
