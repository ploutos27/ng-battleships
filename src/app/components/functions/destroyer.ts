import { random, sample, isEmpty } from "lodash";

export const initialDestroyer = async (table) => {
  const moveAxis1 = sample(['X', 'Y']);
  const moveAxis2 = sample(['X', 'Y']);

  if (moveAxis1 === 'X') moveX(table); // Axis-X is column
  if (moveAxis1 === 'Y') moveY(table); // Axis-Y is column

  if (moveAxis2 === 'X') moveX(table); // Axis-X is column
  if (moveAxis2 === 'Y') moveY(table); // Axis-Y is column

};



const moveX = (table) => {
  const coords = { indexColum: random(1, 10), indexRow: random(1, 10) };

  if (coords.indexColum <= 4) {
    // if less or equall to 4, we have to go up to the aray
    for (let i = 1; i < 5; i++) {
      if (isEmpty(table[coords.indexRow][coords.indexColum + i])) { // check if empty
        table[coords.indexRow][coords.indexColum + i] = {
          ship: -1,
          firedAt: false,
        };
      } else {
          window.location.reload();
      }
    }
  } else if (coords.indexColum >= 5) {
    // else if more that 5 or 4 we have to subtract
    for (let i = 1; i < 5; i++) {
      if (isEmpty(table[coords.indexRow][coords.indexColum - i])) { 
        table[coords.indexRow][coords.indexColum - i] = {
          ship: -1,
          firedAt: false,
        };
      } else {
         window.location.reload();
      }
    }

  }
};

const moveY = (table) => {
  const coords = { indexColum: random(1, 10), indexRow: random(1, 10) };
  if (coords.indexRow <= 4) {
    // if less or equall to 4, we have to go up to the aray
    for (let i = 1; i < 5; i++) {
      if (isEmpty(table[coords.indexRow + i ][coords.indexColum])) {
        table[coords.indexRow + i][coords.indexColum] = {
          ship: -1,
          firedAt: false,
        };
      } else {
        window.location.reload(); // reload if error (probability to match more once to low )
      }
    }
    
  } else if (coords.indexRow >= 5) {
    // else if more that 5 or 4 we have to subtract
    for (let i = 1; i < 5; i++) {
      if (isEmpty(table[coords.indexRow - i ][coords.indexColum])) {
         table[coords.indexRow - i][coords.indexColum] = {
           ship: -1,
           firedAt: false,
         };
      } else {
        window.location.reload();
      }
    }
  
  }
};