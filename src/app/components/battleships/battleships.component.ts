import { Component, OnInit } from '@angular/core';
import { rowsInit } from '../functions/rows';

@Component({
  selector: 'app-battleships',
  templateUrl: './battleships.component.html',
  styleUrls: ['./battleships.component.scss'],
})

export class BattleshipsComponent implements OnInit {
  rows;

  constructor() {}

  ngOnInit(): void {
    this.rows = rowsInit();

    console.log(this.rows)
  }
}
