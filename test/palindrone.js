var palindrone = require('../src/palindrone.js');
describe("Palindrone test suite", function() {
	it('should detect palindromic sequences', function(){
		expect(palindrone.fn.isSequencePalindromic('a'))
		.toBe(true);

		expect(palindrone.fn.isSequencePalindromic('aba'))
		.toBe(true);
	});
});
