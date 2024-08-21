import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { AddTaskComponent } from '../add-task/add-task.component';
import { TaskItemComponent } from "../task-item/task-item.component";
import { Tarefa } from './../../../../Tarefa';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskItemComponent,AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {

  tarefas : Tarefa[] =[];
  constructor( private service: TaskService){}


  ngOnInit(): void {
    this.service.getTasks().subscribe(( resposta )=>{
      this.tarefas = resposta;
    });

  }

  deleteTask(tarefa: Tarefa) {
    this.service.deleteTask(tarefa).subscribe(()=>
       (this.tarefas = this.tarefas.filter((t)=> t.id !== tarefa.id)));
  }

  toggleConcluido(tarefa: Tarefa) {
    tarefa.concluido = !tarefa.concluido;
    this.service.updateTask(tarefa).subscribe();
  }

  addTask(tarefa: Tarefa) {
   this.service.addTask(tarefa).subscribe((tarefa)=>{
    this.tarefas.push(tarefa);
   });
   }
}
