// Validation for coordinates
export const coordinatesValidList = (coordinates) => {
  var format = /^[a-j][1-9]|10$/i;
  return format.test(coordinates);
};

// Return the matrix for coordinates (index for row & index for column)
export const getMatrixIndex = async (table, coordinates) => {
  let [col, row] = coordinates.match(/\D+|\d+/g), // regular expression to seperate numbers from text
    indexColum,
    indexRow; // index for each row and column

  //get index row
  for (let i = 0; i < table.length; i++)
    table[i].forEach((j) =>
      j.header && j.display === col.toUpperCase() ? (indexRow = i) : null
    ); // change to uppercase if lowercase

  // // get index col
  for (
    let i = 0;
    i < table.length;
    i++ // parse the row if string from regular expression
  )
    table[i].forEach((j) =>
      j.header && i === parseInt(row) ? (indexColum = i) : null
    );

  return { indexColum, indexRow };
};
