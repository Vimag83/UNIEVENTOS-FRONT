import { Routes } from '@angular/router';

import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AdminComponent} from './components/admin/admin.component';
import { CrearEventoComponent } from './components/admin/crear-evento/crear-evento.component';
import { DatoAdminComponent } from './components/admin/dato-admin/dato-admin.component';

export const routes: Routes = [
   { path: '', component: InicioComponent },
   { path: 'login', component: LoginComponent },
   { path: 'registro', component: RegistroComponent },
   { path: 'admin', component: AdminComponent,
      children: [
         { path: '', redirectTo: 'datos', pathMatch: 'full' },
         { path: 'datos', component: DatoAdminComponent },
         { path: 'crear-evento', component: CrearEventoComponent },
         // Aquí irán las demás rutas para las otras pestañas
       ]
   },
   
   { path: "**", pathMatch: "full", redirectTo: "" }
];

