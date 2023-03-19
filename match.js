module.exports.match = function (hash) {
  // Assuming that the 'credit card date fields' contain 'card' and 'date' strings
  const regex = /^card.+date.+/i;
  var result = [];
  for (var key in hash) {
    if (regex.test(key)) {
      result.push(key);
    }
  }
  return result;
};