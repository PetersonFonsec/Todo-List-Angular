import { Component, OnInit } from '@angular/core';

type Task = {
  title: string;
  isComplet: boolean;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todo-list';
  tasks: Task[] = [];
  newTask = '';

  addTask(): void {
    if (this.hasTask()) return this.clearInput();

    this.tasks.push({
      title: this.newTask,
      isComplet: false,
    });

    this.clearInput();
  }

  hasTask(): boolean {
    return this.tasks.map((task) => task.title).includes(this.newTask);
  }

  clearInput(): void {
    this.newTask = '';
  }
}
