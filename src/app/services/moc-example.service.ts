import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IBirthdays } from '../pages/model/moc/birthdays.model';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MocExampleService {

  private urlMoc = environment.mocfile; 
  constructor(
    private http: HttpClient
  ) { }
  
/**
 * @function getAll Listando dos os aniversariantes
 */

 public getAll(): Observable<IBirthdays[]>{
    return this.http.get<IBirthdays[]>(`${this.urlMoc}`)
    .pipe(
      retry(3)
    );
  }
 
}
