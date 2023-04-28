const _ = require('lodash')

const mean = _.chain([1, 2, 3, 4])
    .filter(value => value >= 2)
    .mean()


// lazy evaluation
// call by need
console.log(mean.value());