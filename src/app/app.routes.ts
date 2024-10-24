import { Routes } from '@angular/router';

import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AdminComponent} from './components/admin/admin.component';
import { CrearEventoComponent } from './components/crear-evento/crear-evento.component';

export const routes: Routes = [
   { path: '', component: InicioComponent },
   { path: 'login', component: LoginComponent },
   { path: 'registro', component: RegistroComponent },
   { path: 'admin', component: AdminComponent },
   { path: 'crear-evento', component: CrearEventoComponent },
   { path: "**", pathMatch: "full", redirectTo: "" }
];

