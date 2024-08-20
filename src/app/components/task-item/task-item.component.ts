import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';


import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Tarefa } from '../../../../Tarefa';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FontAwesomeModule,CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {

  @Input() tarefa! : Tarefa;
  @Output() onDeleteTask = new EventEmitter<Tarefa>();
  @Output() onToggleConcluido = new EventEmitter<Tarefa>();

  faTimes = faTimesCircle;

  onDelete(tarefa: Tarefa) {
    this.onDeleteTask.emit(tarefa);
  }

  onToggle(tarefa: Tarefa) {
    this.onToggleConcluido.emit(tarefa);
  }
}

