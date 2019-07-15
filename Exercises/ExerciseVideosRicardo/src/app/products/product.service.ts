import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { IProduct } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl = 'api/products/products.json';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
   // en una aplicación del mundo real, podemos enviar el servidor a alguna infraestructura de registro remoto
       // en lugar de simplemente registrarlo en la consola
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
   
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
    // El backend devolvió un código de respuesta no exitoso.
          // El cuerpo de la respuesta puede contener pistas sobre lo que salió mal,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
