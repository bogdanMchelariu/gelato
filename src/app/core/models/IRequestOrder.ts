export interface IRequestOrder {
  order: IOrder;
  recipient: IRecipient;
  product: IProduct;
}

export interface IOrder {
  orderReferenceId: number;
  customerReferenceId: number;
  currencyIsoCode: string;
}

export interface IRecipient {
  countryIsoCode: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  postcode: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface IProduct {
  itemReferenceId: number;
  productUid: string;
  pdfUrl: string;
  quantity: number;
}
