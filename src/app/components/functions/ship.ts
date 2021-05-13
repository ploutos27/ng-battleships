
export const initialShips = async (table, coords) => { 
    table[coords.indexRow][coords.indexColum] = { ship: -1, firedAt: false }; // assign the first random possition of ship

    if (coords.indexColum <= 4) { // if less or equall to 4, we have to go up to the aray
     for (let i = 1; i < 5; i++) 
        table[coords.indexRow][coords.indexColum + i] = { ship: -1, firedAt: false }; 
    } else if (coords.indexColum >= 5 ) { // else if more that 5 or 4 we have to subtract
     for (let i = 1; i < 5; i++) 
        table[coords.indexRow][coords.indexColum - i] = { ship: -1, firedAt: false }; 
    }

}