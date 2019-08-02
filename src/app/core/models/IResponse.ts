export interface IResponse {
  orderReferenceId: number;
  production: IProduction;
}

export interface IProduction {
  itemReferenceId: number;
  productionCountry: string;
  productionTimeZone: string;
  shipments: IShipment[];
}
export interface IShipment {
  promiseUid: string;
  name: string;
  uid: string;
  price: number;
  minDeliveryDays: number;
  maxDeliveryDays: number;
  minDeliveryDate: string;
  maxDeliveryDate: string;
  serviceType: string;
  methodType: string;
  totalWeight: number;
  numberOfParcels: number;
  promiseExpirationDateTime: Date;
}
