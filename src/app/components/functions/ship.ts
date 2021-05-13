import { sample, random } from 'lodash';

// Ship as 1 for Ships 
// Ship as -1 for Destroyers

export const initialShips = async (table) => {
  const randomShip = { indexColum: random(1, 10), indexRow: random(1, 10) }; // https://lodash.com/docs/4.17.15#random
  const moveAxis = sample(['X', 'Y']); // https://lodash.com/docs/#sample

  table[randomShip.indexRow][randomShip.indexColum] = { ship: 1, firedAt: false }; // assign the first random position of ship

  if (moveAxis === 'X') moveX(table, randomShip); // Axis-X is column

  if (moveAxis === 'Y') moveY(table, randomShip); // Axis-Y is row

};

const moveX = (table, coords) => {
  if (coords.indexColum <= 4) {
    // if less or equall to 4, we have to go up to the aray
    for (let i = 1; i < 5; i++)
      table[coords.indexRow][coords.indexColum + i] = {
        ship: 1,
        firedAt: false,
      };
  } else if (coords.indexColum >= 5) {
    // else if more that 5 or 4 we have to subtract
    for (let i = 1; i < 5; i++)
      table[coords.indexRow][coords.indexColum - i] = {
        ship: 1,
        firedAt: false,
      };
  }
};

const moveY = (table, coords) => {
  if (coords.indexRow <= 4) {
    // if less or equall to 4, we have to go up to the aray
    for (let i = 1; i < 5; i++)
      table[coords.indexRow + i][coords.indexColum] = {
        ship: 1,
        firedAt: false,
      };
  } else if (coords.indexRow >= 5) {
    // else if more that 5 or 4 we have to subtract
    for (let i = 1; i < 5; i++)
      table[coords.indexRow - i][coords.indexColum] = {
        ship: 1,
        firedAt: false,
      };
  }
};
