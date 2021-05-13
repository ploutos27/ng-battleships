
// Validation for coordinates
export const coordinatesValidList = (coordinates) => {
  var format = /^[a-j][1-9]|10$/i;
  return format.test(coordinates);
};

// Generate random number between 1 - 10
export const randomNumber = () => {
  return Math.floor(Math.random() * 10) + 1;
};

// Generate Uniq Random Number
export const uniqueRandomNumber = (array, gen_nums) => {
  var rand = array[Math.floor(Math.random() * array.length)];
  if (!in_array(gen_nums, rand)) {
    gen_nums.push(rand);
    return rand;
  }
  return uniqueRandomNumber(array, gen_nums);
};

const in_array = (array, el) => {
  for (var i = 0; i < array.length; i++) if (array[i] == el) return true;
  return false;
}
