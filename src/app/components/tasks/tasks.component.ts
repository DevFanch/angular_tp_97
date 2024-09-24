import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Todo {
  id: number;
  title: string;
  createdAt: Date;
  completed: boolean;
}

@Component({
  selector: 'app-tasks',
    standalone: true,
    imports: [FormsModule, DatePipe],
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  todos: Todo[] = [
    { id: 1, title: "Faire à manger", createdAt: new Date, completed: false },
    { id: 2, title: "Faire le ménage", createdAt: new Date, completed: true },
    { id: 3, title: "Faire les courses", createdAt: new Date, completed: true },
    { id: 4, title: "Se motiver pour faire de sport", createdAt: new Date, completed: false },
    { id: 5, title: "Avoir de la patience avec mes enfants", createdAt: new Date, completed: false },
  ];
  newTodo: string = '';

  addTodo() {
    if (this.newTodo.trim() !== '') {
      const newTodo: Todo = {
        id: this.todos.length + 1,
        title: this.newTodo,
        createdAt: new Date(),
        completed: false
      };
      this.todos.push(newTodo);
      this.newTodo = '';
    }
  }

  removeTodo(index: number) {
    if (index < this.todos.length) {
      this.todos.splice(index, 1);
    }
  }
}