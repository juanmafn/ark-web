import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeriesDto } from '../../../model/SeriesDto';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-single-diario',
  templateUrl: './single-diario.component.html'
})
export class SingleDiarioComponent implements OnInit {

  year: number;
  month: number;
  day: number;
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
      if (this.player == null) {
        this.player = localStorage.getItem('player');
      }
      const fecha: Date = new Date(localStorage.getItem('fecha'));      
      this.year = fecha.getFullYear();
      this.month = fecha.getMonth() + 1;
      this.day = fecha.getDate();
    });
  }

  ngOnInit() {
    if (this.player != null) {
      this.getDate();
    }
  }

  getDate() {
    this.apiService.getSingleDiario(this.player, this.year, this.month, this.day)
      .then(res => {
        this.dataSource = res;

        this.titleGraficaLine = `Horas jugadas por ${this.player} el ${this.dataSource.fecha}`;
        this.titleGraficaDonut = `Proporción de horas totales jugadas por ${this.player} el ${this.dataSource.fecha}`;
      })
      .catch(error => {});
  }

}
