import { initialDestroyer } from "./destroyer";
import { initialShips } from './ship';
import { randomNumber, uniqueRandomNumber } from './global';

export const initGame = async (rows) => {
  let coordinates = [], arrTemp = []
   for (let i = 0; i < 3; i++) {
      coordinates.push({
        indexColum: randomNumber(), // random number for column can be the same for all
        indexRow: uniqueRandomNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], arrTemp), // only 1 number from rows to avoid match with others
      });
   }
  await initialShipsDestroyers(rows, coordinates);
  return rows;
};

// Initial Ships and Destroyers
const initialShipsDestroyers = async (table, coordinates) => {

  let randomIndexOfCoordinates = Math.floor(Math.random() * coordinates.length); // random index from coordinates
  let randomShip = coordinates[randomIndexOfCoordinates]; // set random ship
  let randomDestroyers = coordinates.filter((_, i) => i !== randomIndexOfCoordinates); // set random destroyers
  
  await initialShips(table, randomShip);
  await initialDestroyer(table, randomDestroyers);
};