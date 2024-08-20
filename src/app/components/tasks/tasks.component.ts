import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Tarefa } from '../../../../Tarefa';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from "../task-item/task-item.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskItemComponent],
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
       (this.tarefas = this.tarefas.filter((t)=> tarefa.id !== tarefa.id)));
  }

  toggleConcluido(tarefa: Tarefa) {
    tarefa.concluido = !tarefa.concluido;
    this.service.updateTask(tarefa).subscribe();
  }
}
