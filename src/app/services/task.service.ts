import { HttpClient } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarefa } from '../../../Tarefa';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = "http://localhost:3000/tasks";
  constructor( private httpClient: HttpClient) { }

  getTasks(): Observable<Tarefa[]>{
    return this.httpClient.get<Tarefa[]>(this.apiUrl);
  }

  deleteTask(tarefa : Tarefa): Observable<Tarefa>{
    return this.httpClient.delete<Tarefa>(`${this.apiUrl}/${tarefa.id}`);
  }

  updateTask(tarefa: Tarefa): Observable<Tarefa>{
    return this.httpClient.put<Tarefa>(`${this.apiUrl}/${tarefa.id}`,tarefa);
  }

  addTask(tarefa: Tarefa): Observable<Tarefa>{
    return this.httpClient.post<Tarefa>(`${this.apiUrl}`, tarefa);
  }
}
