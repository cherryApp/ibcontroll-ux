import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formData: User = new User();
  updatePolicy: any = {
    updateOn: 'blur'
  };

  formElements: Array<any> = [
    {
      label: "Email",
      key: 'email',
      updatePolicy : this.updatePolicy,
      pattern : /^[a-zA-Z0-9\.\-]+@[a-zA-Z0-9\.\-]+\.[a-z]{2,}$/,
      errorMessage : "Email is not valid."
    },
    {
      label: "Name",
      key: 'name',
      type: 'text',
      updatePolicy : this.updatePolicy,
      pattern : /^[a-zA-Z \.\-]{5,}$/,
      errorMessage : "Name must be 5 chars."
    },
    {
      label: "BirthDate",
      key: 'birthDate',
      type: 'date',
      updatePolicy : this.updatePolicy
    },
    {
      label: "Eye Color",
      key: 'eyeColor',
      type: 'select',
      updatePolicy : this.updatePolicy,
      options: [
        {key: "green", label: "Green"},
        {key: "blue", label: "Blue"},
        {key: "black", label: "Black"},
        {key: "red", label: "Red"}
      ]
    },
    {
      label: "Living In",
      key: 'livingIn',
      updatePolicy : this.updatePolicy
    },
    {
      label: "Foot Size",
      key: 'footSize',
      type: 'number',
      pattern: /^[0-9]*$/,
      errorMessage: 'Only in number.',
      updatePolicy : this.updatePolicy
    }
  ];

  constructor() {
    this.formData.email = "hello";
    this.formData.eyeColor = "blue";
  }

  ngOnInit() {
  }

  onSubmit(): void {
    console.log(this.formData);
  }

  setData(key, data): void {
    this.formData[key] = data;
  }

}
