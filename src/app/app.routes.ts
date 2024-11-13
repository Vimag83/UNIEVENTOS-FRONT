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
import { UserComponent } from './components/user/user.component';
import { PerfilUsuarioComponent } from './components/user/perfil-usuario/perfil-usuario.component';
import { ListaDeseosComponent } from './components/user/lista-deseos/lista-deseos.component';
import { HistorialComprasComponent } from './components/user/historial-compras/historial-compras.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { ComprasComponent } from './components/compras/compras.component';
import { LoginGuard } from './guards/permiso.service';
import { RolesGuard } from './guards/roles.service';


export const routes: Routes = [
   { path: '', component: InicioComponent },
   { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
   { path: 'registro', component: RegistroComponent, canActivate: [LoginGuard] },
   { path: 'eventos', component: EventosComponent},
   { path: 'compras', component: ComprasComponent},
   { path: 'admin', component: AdminComponent, canActivate: [RolesGuard], data: { expectedRole: ["ADMINISTRADOR"] },
      children: [
         { path: '', redirectTo: 'datos', pathMatch: 'full' },
         { path: 'datos', component: DatoAdminComponent },
         { path: 'crear-evento', component: CrearEventoComponent,canActivate: [RolesGuard], data: { expectedRole: ["ADMINISTRADOR"] } },
         { path: 'evento-admin', component: EventoAdminComponent, canActivate: [RolesGuard], data: { expectedRole: ["ADMINISTRADOR"] } },
         { path: 'crear-cupon', component: CrearCuponComponent,canActivate: [RolesGuard], data: { expectedRole: ["ADMINISTRADOR"] } },
         { path: 'cupon-admin', component: CuponAdminComponent, canActivate: [RolesGuard], data: { expectedRole: ["ADMINISTRADOR"] } },
         { path: 'artistas', component: ArtistaAdminComponent, canActivate: [RolesGuard], data: { expectedRole: ["ADMINISTRADOR"] } },
         { path: 'crear-artista', component: CrearArtistaComponent, canActivate: [RolesGuard], data: { expectedRole: ["ADMINISTRADOR"] } }
         // Aquí irán las demás rutas para las otras pestañas
       ]
   },
   { path: 'user', component: UserComponent, canActivate: [RolesGuard], data: { expectedRole: ["CLIENTE"] },
      children: [
         { path: '', redirectTo: 'perfil', pathMatch: 'full' },
         { path: 'perfil', component: PerfilUsuarioComponent, canActivate: [RolesGuard], data: { expectedRole: ["CLIENTE"] } },
         { path: 'lista-deseos', component: ListaDeseosComponent, canActivate: [RolesGuard], data: { expectedRole: ["CLIENTE"] }},
         { path: 'historial', component: HistorialComprasComponent, canActivate: [RolesGuard], data: { expectedRole: ["CLIENTE"] }},
         // Aquí irán las demás rutas para las otras pestañas
       ]
   },
   
   { path: "**", pathMatch: "full", redirectTo: "" }
];

