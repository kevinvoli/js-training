'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */


function keepFirst(par){
    var m=par.substring(0,2)
    // var n=m.substring(1,m.length)
    return m
}
function keepLast(par2){
    var m=par2.substring(par2.length-2,par2.length)
    // var n=m.substring(0,m.length-1)
    return m
}
function keepFirstLast(par3){
    var m= keepFirst(par3)
    var n=keepLast(par3)
    var v=m+n
    return v
}



//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof keepFirst, 'function')
assert.strictEqual(typeof keepLast, 'function')
assert.strictEqual(typeof keepFirstLast, 'function')
assert.strictEqual(keepFirst.length, 1)
assert.strictEqual(keepLast.length, 1)
assert.strictEqual(keepFirstLast.length, 1)
assert.strictEqual(keepFirst('Salutmoi') ,'Sa')
assert.strictEqual(keepLast('Salutmoi') ,'oi')
assert.strictEqual(keepFirstLast('Salutmoi') ,'Saoi')




// assert.fail('You must write your own tests')
// End of tests */
