import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  selector: 'app-image'

})

export class HomeComponent {
  article1: string = "";
  fg!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.fg = fb.group({
      article1: [null, [Validators.required]]
    })
  }
}





