var palindrone = require('../src/palindrone.js');
describe('Palindrone test suite', function() {

	palindrone.searchedSequence= 'sqrrqabccbatudefggfedvwhijkllkjihxymnnmzpop';

	it('should detect palindromic sequences', function(){
		// qrrq
		expect(palindrone.fn.isSequencePalindromic(1,4))
		.toBe(true);
		// sqrrq
		expect(palindrone.fn.isSequencePalindromic(0,4))
		.toBe(false);
	});
});
