import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GuardformComponent } from './guardform/guardform.component';
import { MyguardGuard } from './myguard.guard';


const routes: Routes = [
  { path: 'home', component: HomeComponent, },
  { path: 'guard' , canActivate:[MyguardGuard] , component:GuardformComponent,children:[]},
  //如果再guard裡面再加入canActiveChild元素 在children都會受到canActiveChild的Guard影響
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
