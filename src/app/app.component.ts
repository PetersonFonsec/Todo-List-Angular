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

  addTask(newTask: string): void {
    if (typeof newTask !== 'string') return;
    if (this.hasTask(newTask) || !newTask) return;

    this.tasks.push({
      title: newTask,
      isComplet: false,
    });
  }

  hasTask(newTask: string): boolean {
    return this.tasks.map((task) => task.title).includes(newTask);
  }

  toggleTask(taskName: string): void {
    this.tasks = this.tasks.map((task) => {
      if (task.title === taskName) task.isComplet = !task.isComplet;

      return task;
    });
  }
}
