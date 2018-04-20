import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-element',
  templateUrl: './form-element.component.html',
  styleUrls: ['./form-element.component.css']
})
export class FormElementComponent implements OnInit {
  elementID: string;
  @Input() label: string = "";
  @Input() model: any;
  @Input() type: string = 'text';
  @Input() updatePolicy: any = {};
  @Input() pattern: RegExp = /.*/;
  @Input() errorMessage: string;
  @Input() options: Array<any>;
  @Output() modelUpdate: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.elementID = this.randomID();
  }

  ngOnInit() {
  }

  onUpdate(model): void {
    this.modelUpdate.emit(model);
  }

  randomID(): string {
    return `element-${Math.round(Math.random()*Math.pow(10, 7))}`;
  }

}
