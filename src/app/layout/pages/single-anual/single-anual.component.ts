import { SeriesDto } from './../../../model/SeriesDto';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-single-anual',
  templateUrl: './single-anual.component.html'
})
export class SingleAnualComponent implements OnInit {

  year: number;
  player: string;
  titleGraficaLine: string;
  titleGraficaDonut: string;
  dataSource: SeriesDto;
  categoriaTitle: string = 'Mes';

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
    });
  }

  ngOnInit() {
    if (this.player) {
      this.getData();
    }
  }

  getData() {
    this.apiService.getSingleAnual(this.player, this.year)
    .then(res => {
      this.dataSource = res;

      this.titleGraficaLine = `Horas jugadas por ${this.player} en el año ${this.dataSource.fecha}`;
      this.titleGraficaDonut = `Proporción de horas totales jugadas por ${this.player} en el año ${this.dataSource.fecha}`;
    })
    .catch(error => {});
  }

}
