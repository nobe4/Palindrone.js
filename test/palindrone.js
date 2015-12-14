var palindrone = require('../src/palindrone.js');
describe("Palindrone test suite", function() {
	it('should detect palindromic sequences', function(){
		expect(palindrone.prototype.isSequencePalindromic('a'))
		.toBe(true);

		expect(palindrone.prototype.isSequencePalindromic('aba'))
		.toBe(true);
	});
});
