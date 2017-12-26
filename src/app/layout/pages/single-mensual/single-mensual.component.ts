import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeriesDto } from '../../../model/SeriesDto';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-single-mensual',
  templateUrl: './single-mensual.component.html'
})
export class SingleMensualComponent implements OnInit {
  
  year: number = 2017;
  month: number = 11;
  player: string;
  titleGraficaLine: string;
  titleGraficaDonut: string;
  dataSource: SeriesDto;
  categoriaTitle: string = 'Día';

  constructor(
    public activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) {
    this.activatedRoute.params.subscribe( params => {
      this.player = params.id;
    });
  }

  ngOnInit() {
    this.apiService.getSingleMensual(this.year, this.month)
      .then(res => {
        this.dataSource = res;

        this.titleGraficaLine = `Horas jugadas por ${this.player} en ${this.dataSource.fecha}`;
        this.titleGraficaDonut = `Proporción de horas totales jugadas por ${this.player} en ${this.dataSource.fecha}`;
      })
      .catch(error => {});
  }

}
