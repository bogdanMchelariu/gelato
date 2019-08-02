import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OrderService } from '../../services';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DeliveryComponent implements OnInit {

  constructor(public orderService: OrderService) { }

  ngOnInit() {
  }

}
