import { SeriesDto } from './../../../model/SeriesDto';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { DatePickerComponent } from '@progress/kendo-angular-dateinputs';
import { ComboBoxComponent } from '@progress/kendo-angular-dropdowns';

@Component({
  selector: 'app-single-anual',
  templateUrl: './single-anual.component.html'
})
export class SingleAnualComponent implements OnInit {

  @ViewChild('comboBox') comboBox: ComboBoxComponent;
  @ViewChild('datePicker') datePicker: DatePickerComponent;

  public value: Date;
  
  year: number;
  player: string;
  titleGraficaLine: string;
  titleGraficaDonut: string;
  dataSource: SeriesDto;
  categoriaTitle: string = 'Mes';
  players: string[];

  constructor(
    public activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) {
    this.activatedRoute.params.subscribe( params => {
      this.player = params.id;
      if (this.player == null) {
        this.player = localStorage.getItem('player');
      }
      const fecha = localStorage.getItem('fecha');
      if (fecha == null) {
        this.value = new Date();
      } else {
        this.value = new Date(fecha);
      }
      this.year = this.value.getFullYear();
    });
  }

  ngOnInit() {
    if (this.player) {
      this.getData();
      this.setUpdate();
    } else {
      this.getUsuarios();
    }
  }

  getData() {
    this.getUsuarios();
    this.getSingleAnual();
  }

  getUsuarios() {
    this.apiService.getUsuarios().then(res => {
      this.players = res;
      if (this.player) {
        this.comboBox.writeValue(this.player);
      }
    });
  }

  getSingleAnual() {
    this.apiService.getSingleAnual(this.player, this.year)
    .then(res => {
      this.dataSource = res;

      this.titleGraficaLine = `Horas jugadas por ${this.player} en el año ${this.dataSource.fecha}`;
      this.titleGraficaDonut = `Proporción de horas totales jugadas por ${this.player} en el año ${this.dataSource.fecha}`;
    })
    .catch(error => {});
  }

  setUpdate() {
    const date = new Date();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    let xseconds = ((5 - minutes % 5) % 5) * 60000 + (20 - seconds)*1000;
    if (xseconds < 0) xseconds += 300000;
    setTimeout(res => this.update(), xseconds);
  }

  private update() {
    this.getData();
    setInterval(res => this.getSingleAnual(), 300000);
  }

  public onChange(value: Date): void {
    localStorage.setItem('fecha', value.toDateString());
    this.year = value.getFullYear();
    this.getData();
  }

  onLeft() {
    this.value.setFullYear(this.value.getFullYear() - 1);
    this.datePicker.writeValue(this.value);
    this.onChange(this.value);
  }

  onRight() {
    this.value.setFullYear(this.value.getFullYear() + 1);
    this.datePicker.writeValue(this.value);
    this.onChange(this.value);
  }

  onKeyDown(event) {
    if (this.player) {
      if (event.key === 'ArrowLeft') {
        this.onLeft();
      }
      if (event.key === 'ArrowRight') {
        this.onRight();
      }
    }
  }

  public valueChange(player: any): void {
    if (player) {
      this.player = player;
      localStorage.setItem('player', player);
      this.getSingleAnual();
    }
  }
}
