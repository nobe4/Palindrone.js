var palindrone = require('../src/palindrone.js');
describe('Palindrone test suite', function() {

	palindrone.fn.init('sqrrqabccbatudefggfedvwhijkllkjihxymnnmzpop');
	it('should detect palindromic sequences', function(){
		// qrrq
		expect(palindrone.fn.isSequencePalindromic(1,4))
		.toBe(true);
		// sqrrq
		expect(palindrone.fn.isSequencePalindromic(0,4))
		.toBe(false);
	});

	it('should get a list of palindromic sequences', function(){
		palindrone.fn.init('this string has 4 palindromes in it, kayak');
		palindrone.fn.findPalindromicSequences();
		expect(palindrone.foundPalindromicSequences.length)
		.toBe(4);

		palindrone.fn.init('this string has 5 palindromes in it, kayak, bob');
		palindrone.fn.findPalindromicSequences();
		expect(palindrone.foundPalindromicSequences.length)
		.toBe(5);
	});
});
