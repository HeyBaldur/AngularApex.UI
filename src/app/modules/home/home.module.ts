import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRouteModule } from './home.routing';
import { RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';

@NgModule({
  imports: [CommonModule, HomeRouteModule, RouterModule],
  declarations: [HomeComponent, MainComponent],
})
export class HomeModule {}
