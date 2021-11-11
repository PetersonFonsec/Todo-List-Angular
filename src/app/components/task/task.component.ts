import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() id = 0;
  @Input() title = '';
  @Input() isComplet = false;
  @Output() toggleTask = new EventEmitter();

  click(): void {
    this.toggleTask.emit();
  }
}
