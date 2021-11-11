import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss'],
})
export class FormSearchComponent {
  @Output() submit = new EventEmitter<string>();
  newTask = '';

  _submit(): void {
    this.submit.emit(this.newTask);
    this.clearInput();
  }

  clearInput(): void {
    this.newTask = '';
  }
}
