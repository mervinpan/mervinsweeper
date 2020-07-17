var _ = require('lodash');

var mineGenerator = function (display) {
  var minesMarked = 0;
  var newDisplay = _.flattenDeep(display)
  newDisplay.forEach(each => {
    if (each === 2) {
      minesMarked++;
    }
  })
  return 10-minesMarked;
}

export default mineGenerator;