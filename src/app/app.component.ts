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
  tasks: Task[] = [];

  addTask(newTask: string): void {
    if (!this.validTask(newTask)) return;

    this.tasks.push({
      title: newTask,
      isComplet: false,
    });
  }

  storageTasks(): void {
    localStorage.setItem('', JSON.stringify(this.tasks));
  }

  loadTasks(): void {
    const tasks = localStorage.getItem('');
    if (tasks) this.tasks = JSON.parse(tasks);
  }

  validTask(newTask: string): boolean {
    return !this.hasTask(newTask) && !!newTask && typeof newTask === 'string';
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
