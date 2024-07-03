import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000';

  getTasks(): Observable<any> {
    return from(axios.get(`${this.apiUrl}/get_tasks`).then(response => response.data));
  }

  createTask(task: any): Observable<any> {
    return from(axios.post(`${this.apiUrl}/add_task`, task).then(response => response.data));
  }

  updateTask(id: number, task: any): Observable<any> {
    return from(axios.put(`${this.apiUrl}/update_task/${id}`, task).then(response => response.data));
  }

  deleteTask(id: number): Observable<any> {
    return from(axios.delete(`${this.apiUrl}/delete_task/${id}`).then(response => response.data));
  }
}
