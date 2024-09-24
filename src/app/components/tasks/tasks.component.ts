import { Component } from '@angular/core';
import { Task } from '../../interfaces/task';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  // Todo Add
  taskToAdd: string = ''
  // Todo check les doublons d'id en cas de suppression
  todolist: Array<Task> = [
    {id: 1, title: "Faire à manger", createdAt: new Date, completed: false},
    {id: 2, title: "Faire le ménage", createdAt: new Date, completed: true},
    {id: 3, title: "Faire les courses", createdAt: new Date, completed: true},
    {id: 4, title: "Se motiver pour faire de sport", createdAt: new Date, completed: false},
    {id: 5, title: "Avoir de la patience avec mes enfants", createdAt: new Date, completed: false},
  ]

  // Methods
  addTask(): void {
    if (this.taskToAdd.trim() !== '') {
      this.todolist.push({id: this.todolist.length++, title: this.taskToAdd, createdAt: new Date, completed: false})
      this.taskToAdd = ''
    }
  }

  removeTask(index: number): void {
    this.todolist.splice(index, 1)
  }

  // getTasksDone(): Array<Task>|null {
  //   return this.todolist.filter((task) => task.completed)
  // }
  // getTasksNotDone(): Array<Task>|null {
  //   return this.todolist.filter((task) => !task.completed)
  // }
}
