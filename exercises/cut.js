'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

function cutFirst(par){
    var m=par.substring(1,par.length)
    var n=m.substring(1,m.length)
    return n
}
function cutLast(par2){
    var m=par2.substring(0,par2.length-1)
    var n=m.substring(0,m.length-1)
    return n
}
function cutFirstLast(par3){
    var m= cutFirst(par3)
    var n=cutLast(m)
    return n
}


//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof cutFirst, 'function')
assert.strictEqual(typeof cutLast, 'function')
assert.strictEqual(typeof cutFirstLast, 'function')
assert.strictEqual(cutFirst.length, 1)
assert.strictEqual(cutLast.length, 1)
assert.strictEqual(cutFirstLast.length, 1)
assert.strictEqual(cutFirst('Salutmoi') ,'lutmoi')
assert.strictEqual(cutLast('Salutmoi') ,'Salutm')
assert.strictEqual(cutFirstLast('Salutmoi') ,'lutm')

// assert.fail('You must write your own tests')
// End of tests */
