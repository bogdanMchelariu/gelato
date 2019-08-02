import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IRequestOrder, IResponse, IShipment } from '../models';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class OrderService {
  constructor(private httpClient: HttpClient) {}

  shipmentList: IShipment[];
  isLoading = false;

  order(orderRequest?: IRequestOrder): Observable<IResponse> {
    this.isLoading = true;
    return this.httpClient.post<IResponse>(environment.baseUrl, orderRequest).pipe(
      tap(shipments => {
        this.shipmentList = shipments.production.shipments;
        this.isLoading = false;
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
      this.isLoading = false;

      confirm(error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      this.isLoading = false;

      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
      confirm(error.error);
    }
    this.isLoading = false;

    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
