import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { IRequestOrder } from '../../models';
import { OrderService } from '../../services';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OrderComponent implements OnInit {
  orderForm: FormGroup;

  constructor(private fb: FormBuilder, private orderService: OrderService) {}

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.orderForm = this.fb.group({
      order: this.fb.group({
        orderReferenceId: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
        customerReferenceId: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
        currencyIsoCode: ['', Validators.required]
      }),
      recipient: this.fb.group({
        countryIsoCode: ['', Validators.required],
        addressLine1: ['', Validators.required],
        addressLine2: ['', Validators.required],
        city: ['', Validators.required],
        postcode: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
      }),
      product: this.fb.group({
        itemReferenceId: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
        productUid: ['', Validators.required],
        pdfUrl: [
          '',
          [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]
        ],
        quantity: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
      })
    });
  }

  onSubmit() {
    this.orderService.order(this.orderForm.value as IRequestOrder).subscribe();
  }
}
