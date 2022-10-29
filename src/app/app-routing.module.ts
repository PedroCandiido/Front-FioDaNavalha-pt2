import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUSComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';

const routes: Routes = [
  {path: 'home', component: PaginaPrincipalComponent},
  {path: 'login', component: LoginComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'sobre', component: AboutUSComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
