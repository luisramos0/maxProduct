var maxProduct = function( inputArray )
{
	if( Object.prototype.toString.call( inputArray ) != '[object Array]' )
		return null

	var min = Math.min()
	var max = Math.max()
	var minMultiple = null
	var maxMultiple = null
	var maxProduct = null

	for( var i = 0; i < inputArray.length; i++ ) {

		if( !isInteger( inputArray[i] ) )
			return null

		if ( isMultiple( inputArray[i]) )
		{
			if( i != 0 )
				maxProduct = Math.max(maxProduct, inputArray[i] * max, inputArray[i] * min);

			maxMultiple = Math.max( maxMultiple, inputArray[i])
			minMultiple = Math.min( minMultiple, inputArray[i])

		} else {
			if( maxMultiple != null )
				maxProduct = Math.max(maxProduct, inputArray[i] * maxMultiple, inputArray[i] * minMultiple);
		}
	
		max = Math.max( max, inputArray[i])
		min = Math.min( min, inputArray[i])
	}

	return maxProduct	
}

var MULTIPLE = 3  // only products multiple of MULTIPLE should be returned

function isMultiple( number ) {
	return number%MULTIPLE == 0
}

function isInteger( number ) {
	return number != null && number % 1 == 0
}

module.exports = maxProduct
