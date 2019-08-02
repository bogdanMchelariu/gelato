import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent, OrderComponent, LoaderComponent, DeliveryComponent } from './components';
import { OrderService } from './services';

@NgModule({
  declarations: [HomeComponent, OrderComponent, DeliveryComponent, LoaderComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, SharedModule],
  providers: [OrderService],
  exports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, SharedModule]
})
export class CoreModule {}
