'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */
function cutFirst(par){
    var m= par.substring(1,par.length)
    var b= m.toLowerCase()
    return b 
}
function keepFirst(par){
    var m=par.substring(0,1)
    var n= m.toUpperCase()   
    return n
}
function sentence(par){
    var m =''
    var n
    for(var i=0; i<par.length; i++){
        m +=par[i]+' '
    }
    m=m.substring(0,m.length-1)

    return m
}

function jadenCase(par){

    var m=par.split(' ')
    var n = []
  
    
    for (var i=0;i<m.length; i++){
        
        var f= keepFirst(m[i])
        var b= cutFirst(m[i])
        var v=f+b
        n.push(v)
    }
    
    return sentence(n)
}


//* Begin of tests
const assert = require('assert')

assert.strictEqual(jadenCase('How are you ?'), 'How Are You ?')
//assert.fail('You must write your own tests')
// End of tests */

