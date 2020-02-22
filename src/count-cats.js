module.exports = function countCats(matrix) {
 return matrix.flat().filter(m => m == '^^').length;  
};
