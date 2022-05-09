import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Tarefa } from '../models/tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  private url = 'http://localhost:3000/tarefas';

  constructor(private httpClient: HttpClient) {
  }

  todas(): Observable<Tarefa[]> {
    return this.httpClient.get<Tarefa[]>(this.url);
  }


}
