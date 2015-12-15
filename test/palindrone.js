var palindrone = require('../src/palindrone.js');
describe('Palindrone test suite', function() {
	it('should get a list of palindromic sequences', function(){
		palindrone.fn.init('');
		palindrone.fn.findPalindromicSequences();
		expect(palindrone.foundPalindromicSequences.length)
		.toBe(0);

		palindrone.fn.init('no palindrome');
		palindrone.fn.findPalindromicSequences();
		expect(palindrone.foundPalindromicSequences.length)
		.toBe(0);

		palindrone.fn.init('only 1 palindrome');
		palindrone.fn.findPalindromicSequences();
		expect(palindrone.foundPalindromicSequences.length)
		.toBe(1);

		palindrone.fn.init('this string has 2 palindromes in it');
		palindrone.fn.findPalindromicSequences();
		expect(palindrone.foundPalindromicSequences.length)
		.toBe(2);

		palindrone.fn.init('this string has 3 palindromes in it, kayak');
		palindrone.fn.findPalindromicSequences();
		expect(palindrone.foundPalindromicSequences.length)
		.toBe(3);
	});

	it('should get a maximum of 3 palindromic sequences', function(){
		expect(
			palindrone('this string has 4 palindromes in it, kayak, bob').length
		).toBe(3);

		expect(
			palindrone('no palindrome').length
		).toBe(0);
	});
});
