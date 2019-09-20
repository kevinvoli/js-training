'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */


//* Begin of tests
const assert = require('assert')

function whisper(par){
    var m= par.toLowerCase()
    return m
}
assert.strictEqual(typeof whisper, 'function')
assert.strictEqual(whisper.length, 1)
assert.strictEqual(whisper('Salut') ,'salut')

// assert.fail('You must write your own tests')
// End of tests */
