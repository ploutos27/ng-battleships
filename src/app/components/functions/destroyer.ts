export const initialDestroyer = async (table, coords) => {
  coords.forEach((index) => {
    table[index.indexRow][index.indexColum] = { destroyer: -1, firedAt: false }; // add the first one from array
    if (index.indexColum <= 4) { // if less or equall to 4, we have to go up to the aray
      for (let i = 1; i < 4; i++)
        table[index.indexRow][index.indexColum + i] = {
          destroyer: -1,
          firedAt: false,
        };
    } else if (index.indexColum >= 5) { // else if more that 5 or 4 we have to subtract
      for (let i = 1; i < 4; i++)
        table[index.indexRow][index.indexColum - i] = {
          destroyer: -1,
          firedAt: false,
        };
    }
  });
};
