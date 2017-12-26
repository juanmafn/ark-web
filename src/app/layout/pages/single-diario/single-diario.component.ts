import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeriesDto } from '../../../model/SeriesDto';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-single-diario',
  templateUrl: './single-diario.component.html'
})
export class SingleDiarioComponent implements OnInit {

  year: number = 2017;
  month: number = 11;
  day: number = 15;
  player: string;
  titleGraficaLine: string;
  titleGraficaDonut: string;
  dataSource: SeriesDto;
  categoriaTitle: string = 'Hora';

  constructor(
    public activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) {
    this.activatedRoute.params.subscribe( params => {
      this.player = params.id;
    });
  }

  ngOnInit() {
    this.apiService.getSingleDiario(this.year, this.month, this.day)
      .then(res => {
        this.dataSource = res;

        this.titleGraficaLine = `Horas jugadas por ${this.player} el ${this.dataSource.fecha}`;
        this.titleGraficaDonut = `Proporción de horas totales jugadas por ${this.player} el ${this.dataSource.fecha}`;
      })
      .catch(error => {});
  }

}
