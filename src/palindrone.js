/**
 * Palindrone.js
 *
 * Utility for finding palindromic sequences.
 */

(function (undefined) {
	var palindrone = function(searchedSequence){
		palindrone.fn.init(searchedSequence);
		palindrone.fn.findPalindromicSequences();
		palindrone.fn.sortFoundPalindromicSequences();
		return palindrone.foundPalindromicSequences.slice(0,3);
	};

	palindrone.searchedSequence = "";
	palindrone.searchedSequenceLength = 0;
	palindrone.foundPalindromicSequences = [];

	palindrone.prototype = palindrone.fn = {

		init: function (searchedSequence) {
			palindrone.searchedSequence = searchedSequence;
			palindrone.searchedSequenceLength = searchedSequence.length;
			palindrone.foundPalindromicSequences = [];
		},

		isSequencePalindromic: function(iteratorStart, iteratorEnd){
			var isPalindrome = true;
			// Bring iterators closer while checking the extrem values are equals
			while(isPalindrome && iteratorStart < iteratorEnd){
				isPalindrome = palindrone.searchedSequence[iteratorStart++] === palindrone.searchedSequence[iteratorEnd--];
			}

			return isPalindrome;
		},

		sortFoundPalindromicSequences: function(){
			palindrone.foundPalindromicSequences.sort(function(element1, element2){
				return element2.length - element1.length;
			});
		},

		findPalindromicSequences: function(){
			for(var iteratorStart = 0; iteratorStart < palindrone.searchedSequenceLength - 2; iteratorStart ++){
				for(var iteratorEnd = iteratorStart + 1; iteratorEnd < palindrone.searchedSequenceLength; iteratorEnd ++){
					if(palindrone.fn.isSequencePalindromic(iteratorStart, iteratorEnd)) {
						palindrone.foundPalindromicSequences.push({
							'start': iteratorStart,
							'length': iteratorEnd - iteratorStart + 1,
							'content': palindrone.searchedSequence.slice(iteratorStart, iteratorEnd + 1)
						});
					}
				}
			}
		}
	};

	// Expose the module
	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
		module.exports = palindrone;
	} else {
		window.palindrone = palindrone;
	}
})();
