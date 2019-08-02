import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OrderService } from 'src/app/core/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  constructor(public orderService: OrderService) {}

  ngOnInit() {}
}
