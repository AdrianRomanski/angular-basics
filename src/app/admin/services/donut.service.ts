import {Donut} from "../model/donut.model";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, delay, map, of, retryWhen, take, tap, throwError} from "rxjs";

export class DonutService {

  private donuts: Donut[] = [];

  constructor(private http: HttpClient) {
  }

  read() {
    if (this.donuts.length) {
      return of(this.donuts);
    }

    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    headers = headers.append('Api-Token', '1234abcd');

    const options = {
      headers
    };

    return this.http.get<Donut[]>(`/api/donuts`, options)
      .pipe(
        tap((donuts) => console.log(donuts)),
        retryWhen((errors) =>
           errors.pipe(
            delay(1000),
            take(3)
          )
        ),
        catchError(this.handleError)
      )
  }

  readOne(id: string) {
    return this.read().pipe(
      map((donuts: Donut[]) => {
        const donut = donuts.find((d: Donut) => d.id === id);
        return donut ? donut : {name: '', icon: '', price: 0, description: ''}
      }),
      catchError(this.handleError)
    )
  }

  create(payload: Donut) {
    return this.http.post<Donut>(`/api/donuts`, payload)
      .pipe((
        tap((donut: Donut) => this.donuts = [...this.donuts, donut]),
        catchError(this.handleError))
      );
  }

  update(payload: Donut) {
    return this.http.put<Donut>(`/api/donuts/${payload.id}`, payload)
      .pipe((
        tap((donut: Donut) => {
          this.donuts = this.donuts.map((d: Donut) => {
            return d.id === donut.id ? donut : d;
          });
        }),
        catchError(this.handleError)
      ))
  }

  delete(payload: Donut) {
    return this.http
      .delete<Donut>(`/api/donuts/${payload.id}`)
      .pipe((
        tap(() => {
          this.donuts = this.donuts.filter((donut: Donut) => donut.id !== payload.id);
        })))
  }

  private handleError(err: HttpErrorResponse) {
    if(err.error instanceof ErrorEvent) {
      // client side - angular application throwing error
      console.warn('Client', err.message);
    } else {
      console.warn('Server', err.message);
      // server-side - backend throwing error
    }
    return throwError(() => Error(err.message));
  }
}
