var expect = require("chai").expect
var maxProduct = require("../maxProduct")

describe('maxProduct', function(){

it('should return null if given invalid input (non-array, array with less than 2 elements or array with non integers)', function()
{
	var undefinedObject

	['', null, undefinedObject, 8, {}, [], [1], [2 ,], [, 2, 3], ['g', 4, 3], [6, 7, undefinedObject], [5, 6, null], [6, 2, {}]].forEach( function( invalidInput ) {
	     expect( maxProduct( invalidInput ) ).to.be.null
	})
})

it('should return null if no product multiple of 3 is found', function()
{
	expect( maxProduct( [ 1, 2 ] ) ).to.be.null
})

it('should return the max product if many products multiple of 3 are found', function()
{
	expect( maxProduct( [ 3, 5, 3, 7, 3, 6 ] ) ).to.equal( 42 )
})

it('should not reuse numbers in the input list', function()
{
	expect( maxProduct( [ 1, 9, 2, 4 ] ) ).to.equal(36) // .andNot(81)
})

it('should not return higher products that are not multiple of 3', function()
{
	expect( maxProduct( [ 6, 8, 8, 7, 2, 5 ] ) ).to.equal(48)   // .andNot(64)
})

it('should return product of negatives multiple of 3 if higher than other product of positives multiple of 3', function()
{
	expect( maxProduct( [ 6, 8, 9, -21, 6, 8, 8, -21, 7, 2, 5 ] ) ).to.equal(441)
})

it('should ignore product of negatives if higher than positives but not multiple of 3', function()
{
	expect( maxProduct( [ 6, 8, 8, -28, 7, 2, 5, -2, 7 ] ) ).to.equal(48)
})

it('should return null if given non integer values in array, even if products are integer', function()
{
	expect( maxProduct( [ -1.2, 6, 8, 8, 7, 2, -50 ] ) ).to.be.null
})
})