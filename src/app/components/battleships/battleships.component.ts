import { Component, OnInit } from '@angular/core';
import {
  drawMatrixBoard,
  coordinatesValidList,
  getMatrixIndex,
} from '../functions';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { isEmpty } from 'lodash';

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
  ships = 5;
  destroyers = 8;
  gameEnd = false;

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

  restart() {
    window.location.reload();
  }

  async ngOnInit(): Promise<void> {
    this.board = await drawMatrixBoard(); // draw board

    console.log(this.board);
  }

  async onFire() {
    if (this.form.invalid) return;
    const index = await getMatrixIndex(this.board, this.f.cordinators.value); // get index from user coordinates
    const fire = await this.fireOnCordinators(index);
    this.form.reset();
  }

  get f() {
    return this.form.controls;
  }

  async fireOnCordinators(index) {
    if (isEmpty(this.board[index.indexRow][index.indexColum])) {
      this.board[index.indexRow][index.indexColum] = {
        miss: true,
        display: 'Miss',
      };
    } else {
      if (
        this.board[index.indexRow][index.indexColum].miss ||
        this.board[index.indexRow][index.indexColum].hit
      ) {
        return false;
      } else {
        const { ship } = this.board[index.indexRow][index.indexColum]; // export ship type
        this.board[index.indexRow][index.indexColum] = {
          ship,
          firedAt: true,
          hit: true,
          display: 'Hit',
        };

        if (ship !== -1) {
          this.ships -= 1;
        } else {
          this.destroyers -= 1;
        }

        if (this.ships === 0) this.initClasses(1);

        if (this.destroyers === 0 || this.destroyers === 4)
          this.initClasses(-1);

        if (this.ships === 0 && this.destroyers === 0) {
          this.gameEnd = true;
          this.form.disable();
        }
      }
    }
  }

  async initClasses(type: number) {
    for (let i = 1; i < this.board.length; i++) {
      for (let j = 1; j < this.board[i].length; j++) {
        if (!isEmpty(this.board[i][j])) {
          if (this.board[i][j].ship === type) {
            if (this.board[i][j].hit) {
              this.board[i][j] = { sunk: true, display: 'Sunk' };
            }
          }
        }
      }
    }
  }
}
