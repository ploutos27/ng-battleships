export const rowsInit = () => {
 let rows = [];
  for (var i = 0; i < 11; ++i) {
    rows.push([]);
    for (var j = 0; j < 11; ++j) {
      rows[i].push({});
      if (i == 0) {
        rows[i][j] = { display: j == 0 ? ' ' : j.toString(), header: true };
      } else if (j == 0) {
        rows[i][j] = { display: String.fromCharCode(64 + i), header: true };
      }
    }
  }
  return rows;
};
