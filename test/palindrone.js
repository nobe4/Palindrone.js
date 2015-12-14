var palindrone = require('../src/palindrone.js');
describe('Palindrone test suite', function() {
	it('should get a list of palindromic sequences', function(){
		palindrone.fn.init('this string has 3 palindromes in it, kayak');
		palindrone.fn.findPalindromicSequences();
		expect(palindrone.foundPalindromicSequences.length)
		.toBe(3);

		palindrone.fn.init('this string has 4 palindromes in it, kayak, bob');
		palindrone.fn.findPalindromicSequences();
		expect(palindrone.foundPalindromicSequences.length)
		.toBe(4);
	});
});
