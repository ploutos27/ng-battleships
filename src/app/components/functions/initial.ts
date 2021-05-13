import { initialDestroyer } from './destroyer';
import { initialShips } from './ship';

export const initGame = async (rows) => {
  const ships = await initialShips(rows); // assigned ships
  const destroyer = await initialDestroyer(rows); // assigned ships
  return rows;
};
