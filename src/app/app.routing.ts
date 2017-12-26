import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { InicioComponent } from './layout/pages/inicio/inicio.component';
import { SingleAnualComponent } from './layout/pages/single-anual/single-anual.component';
import { SingleMensualComponent } from './layout/pages/single-mensual/single-mensual.component';
import { SingleDiarioComponent } from './layout/pages/single-diario/single-diario.component';
import { SeveralAnualComponent } from './layout/pages/several-anual/several-anual.component';
import { SeveralMensualComponent } from './layout/pages/several-mensual/several-mensual.component';
import { SeveralDiarioComponent } from './layout/pages/several-diario/several-diario.component';


const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'several-anual', pathMatch: 'full' },
            { path: 'inicio', component: InicioComponent },
            { path: 'single-anual', component: SingleAnualComponent },
            { path: 'single-anual/:id', component: SingleAnualComponent },
            { path: 'single-mensual', component: SingleMensualComponent },
            { path: 'single-mensual/:id', component: SingleMensualComponent },
            { path: 'single-diario', component: SingleDiarioComponent },
            { path: 'single-diario/:id', component: SingleDiarioComponent },
            { path: 'several-anual', component: SeveralAnualComponent },
            { path: 'several-mensual', component: SeveralMensualComponent },
            { path: 'several-diario', component: SeveralDiarioComponent },
            { path: '**', redirectTo: 'several-anual' },
        ]
    }
];

export const routing = RouterModule.forRoot(routes);