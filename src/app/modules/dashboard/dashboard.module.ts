import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardMainComponent } from './components/dashboard-main/dashboard-main.component';
import { DashboardRouteModule } from './dashboard.routes';
import { RouterModule } from '@angular/router';
import { HeaderModule } from 'src/app/shared/modules/header/header.module';

@NgModule({
  imports: [CommonModule, DashboardRouteModule, RouterModule, HeaderModule],
  declarations: [DashboardComponent, DashboardMainComponent],
})
export class DashboardModule {}
