'use strict'

/*
 * Create a `multiply` function that takes two number as arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 * and no loops. You need to do it using recursion.
 *
 * @notions Primitive and Operators, Functions, Recursion
 */

// Your code :
function multiply(par1,par2){
    if ( par1<0 &&par2<0){
        var m=par1
        var z=par2
        function mul(m,z){
            return (m=== -1)?-z:mul(m-(-1),z-(-par2))
        }
        var to =mul(par1,par2)
        return to  
        }else if (par1>0&& par2>0){
            var m=par1
            var z=par2
            function mul(m,z){
                    return (m=== 1)? z: mul(m-1,z-(-par2))
            }
            var to = mul(par1,par2)
            return to
        }  else if((par1<0 && par2>0)){
            var m=par1
            var z=par2
            function mul(m,z){
                 return m===-1 ?  -z: mul(m-(-1),z-(-par2))
            }
            var to =mul(par1,par2)
            return to
        }else if((par1>0 && par2<0)){
            var m=par1
            var z=par2
             function mul(m,z){
                    return (m=== 1)? z:  mul(m-1,z-(-par2))   
            }
            var to = mul(par1,par2)
            return to
        }  else{
            return 0
        }
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof multiply, 'function')
assert.strictEqual(multiply.length, 2)
assert.strictEqual(multiply.toString().includes('Math.imul'), false)
assert.strictEqual(multiply.toString().includes('while'), false)
assert.strictEqual(multiply.toString().includes('for'), false)
assert.strictEqual(multiply.toString().includes('*'), false)
assert.strictEqual(multiply.toString().includes('/'), false)
assert.strictEqual(multiply(34, 78), 2652)
assert.strictEqual(multiply(123, 0), 0)
assert.strictEqual(multiply(0, -230), 0)
assert.strictEqual(multiply(0, 0), 0)
assert.strictEqual(multiply(123, -22), -2706)
assert.strictEqual(multiply(-22, 123), -2706)
assert.strictEqual(multiply(-22, -123), 2706)
// End of tests */
