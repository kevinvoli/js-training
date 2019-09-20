'use strict'

/*
 * Create a `capitalize` function that takes a string
 * and transforms it to upper case only for the first letter,
 * and in lowercase for the rest of the string
 *
 */
function cutFirst(par){
    var m=par.substring(1,par.length)
    return m
}
function keepFirst(par){
    var m=par.substring(0,1)
    var n= m.toUpperCase()
    
    return n
}
function capitalize(par){
    var m= keepFirst(par)
    var n= cutFirst(par)
    var b= n.toLowerCase()
    var v= m+b
    return v
}


//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof capitalize, "function")
assert.strictEqual(capitalize('str'), 'Str')
assert.strictEqual(capitalize('qsdqsdqsd'), 'Qsdqsdqsd')
assert.strictEqual(capitalize('STR'), 'Str')
assert.strictEqual(capitalize('zapZAP'), 'Zapzap')
// End of tests */
