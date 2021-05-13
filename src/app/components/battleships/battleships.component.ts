import { Component, OnInit } from '@angular/core';
import { drawMatrixBoard, coordinatesValidList } from '../functions';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

// AbstractControl for validate coordinates
const ValidateCoordinates = (
  control: AbstractControl
): { [key: string]: any } | null => {
  if (control.value && !coordinatesValidList(control.value))
    return { coordinatesInvalid: true };
  return null;
};

@Component({
  selector: 'app-battleships',
  templateUrl: './battleships.component.html',
  styleUrls: ['./battleships.component.scss'],
})
export class BattleshipsComponent implements OnInit {
  board = [];

  form = new FormGroup({
    cordinators: new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(3),
        ValidateCoordinates,
      ])
    ),
  });

  constructor() {}

  async ngOnInit(): Promise<void> {
    this.board = await drawMatrixBoard();
    console.log(this.board)
  }

  onFire() {
    if (this.form.invalid) return;
  }

  get f() {
    return this.form.controls;
  }
}
