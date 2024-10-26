import { Routes } from '@angular/router';

import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AdminComponent} from './components/admin/admin.component';
import { CrearEventoComponent } from './components/admin/crear-evento/crear-evento.component';
import { EventoAdminComponent } from './components/admin/evento-admin/evento-admin.component';
import { DatoAdminComponent } from './components/admin/dato-admin/dato-admin.component';
import { CuponAdminComponent } from './components/admin/cupon-admin/cupon-admin.component';
import { ArtistaAdminComponent } from './components/admin/artista-admin/artista-admin.component';
import { CrearCuponComponent } from './components/admin/crear-cupon/crear-cupon.component';
import { CrearArtistaComponent } from './components/admin/crear-artista/crear-artista.component';



export const routes: Routes = [
   { path: '', component: InicioComponent },
   { path: 'login', component: LoginComponent },
   { path: 'registro', component: RegistroComponent },
   { path: 'admin', component: AdminComponent,
      children: [
         { path: '', redirectTo: 'datos', pathMatch: 'full' },
         { path: 'datos', component: DatoAdminComponent },
         { path: 'crear-evento', component: CrearEventoComponent },
         { path: 'evento-admin', component: EventoAdminComponent },
         { path: 'crear-cupon', component: CrearCuponComponent },
         { path: 'cupon-admin', component: CuponAdminComponent },
         { path: 'artistas', component: ArtistaAdminComponent },
         { path: 'crear-artista', component: CrearArtistaComponent }
         // Aquí irán las demás rutas para las otras pestañas
       ]
   },
   
   { path: "**", pathMatch: "full", redirectTo: "" }
];

