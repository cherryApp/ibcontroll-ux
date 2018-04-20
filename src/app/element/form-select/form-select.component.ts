import { Component, OnInit } from '@angular/core';
import { FormElementComponent } from '../form-element/form-element.component';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.css']
})
export class FormSelectComponent extends FormElementComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

  onUpdateButton(value): void {
    this.modelUpdate.emit(value);
  }

}
