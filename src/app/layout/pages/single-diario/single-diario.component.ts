import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeriesDto } from '../../../model/SeriesDto';
import { ApiService } from '../../../services/api.service';
import { DatePickerComponent } from '@progress/kendo-angular-dateinputs';
import { ComboBoxComponent } from '@progress/kendo-angular-dropdowns';

@Component({
  selector: 'app-single-diario',
  templateUrl: './single-diario.component.html'
})
export class SingleDiarioComponent implements OnInit {

  @ViewChild('comboBox') comboBox: ComboBoxComponent;
  @ViewChild('datePicker') datePicker: DatePickerComponent;

  public value: Date;
  
  year: number;
  month: number;
  day: number;
  player: string;
  titleGraficaLine: string;
  titleGraficaDonut: string;
  dataSource: SeriesDto;
  categoriaTitle: string = 'Hora';
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
      this.month = this.value.getMonth() + 1;
      this.day = this.value.getDate();
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
    this.getSingleDiario();
  }

  getUsuarios() {
    this.apiService.getUsuarios().then(res => {
      this.players = res;
      if (this.player) {
        this.comboBox.writeValue(this.player);
      }
    });
  }

  getSingleDiario() {
  this.apiService.getSingleDiario(this.player, this.year, this.month, this.day)
      .then(res => {
        this.dataSource = res;

        this.titleGraficaLine = `Horas jugadas por ${this.player} el ${this.dataSource.fecha}`;
        this.titleGraficaDonut = `Proporción de horas totales jugadas por ${this.player} el ${this.dataSource.fecha}`;
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
    setInterval(res => this.getSingleDiario(), 300000);
  }

  public onChange(value: Date): void {
    localStorage.setItem('fecha', value.toDateString());
    this.year = value.getFullYear();
    this.month = value.getMonth() + 1;
    this.day = value.getDate();
    this.getData();
  }

  onLeft() {
    this.value.setDate(this.value.getDate() - 1);
    this.datePicker.writeValue(this.value);
    this.onChange(this.value);
  }

  onRight() {
    this.value.setDate(this.value.getDate() + 1);
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
      this.getSingleDiario();
    }
  }

}
