import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  @Input() player: string;
  @Input() single: boolean; // true: single, false: several
  @Input() type: string; // anual | mensual | diario

  ruta: string;
  rutaPadre: string;
  typeString: string;

  constructor() { }

  ngOnInit() {
    switch(this.type) {
      case 'anual':
        this.ruta = this.single ? '/single-anual' : '/several-anual';
        this.rutaPadre = '/several-anual';
        this.typeString = 'Anual';
        break;
      case 'mensual':
        this.ruta = this.single ? '/single-mensual' : '/several-mensual';
        this.rutaPadre = '/several-mensual';
        this.typeString = 'Mensual';
        break;
      case 'diario':
        this.ruta = this.single ? '/single-diario' : '/several-diario';
        this.rutaPadre = '/several-diario';
        this.typeString = 'Diario';
        break;
    }
  }

}
