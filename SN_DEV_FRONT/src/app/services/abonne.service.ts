import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
import { AbonneModel } from '../models/abonne.model';

@Injectable({
  providedIn: 'root'
})
export class AbonneService {
  private readonly API_URL_ABONNE: string ="";
  constructor(private http: HttpClient) { }

  private log(res: any) {
    console.table(res);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }

  addAbonne(abonne: AbonneModel): Observable<AbonneModel> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-type': 'application/json'})
    };

    return this.http.post<AbonneModel>(this.API_URL_ABONNE, abonne, httpOptions).pipe(
      tap((res) => this.log(res)),
      catchError((error) => this.handleError(error, null))
    )
  }

  getAbonne(): Observable<AbonneModel[]> {
    return this.http.get<AbonneModel>(this.API_URL_ABONNE).pipe(
      tap((res) => this.log(res)),
      catchError((error) => this.handleError(error, []))
    );
  }

  updatateAbonne(abonne: AbonneModel): Observable<any> {
    const htppOption = {
      headers: new HttpHeaders({'Content-type': 'application/json'})
    }

    return this.http.put(this.API_URL_ABONNE+"/abonne/"+abonne.id, abonne, htppOption).pipe(
      tap((res) => this.log(res)),
      catchError((error) => this.handleError(error, null))
    );
  }

  deleteAbonne(abonne: AbonneModel): Observable<null> {
    return this.http.delete(this.API_URL_ABONNE+"/abonne/"+abonne.id).pipe(
      tap((res) => this.log(res)),
      catchError((error) => this.handleError(error, null))
    );
  }
}
