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

		sortFoundPalindromicSequences: function(){
			palindrone.foundPalindromicSequences.sort(function(element1, element2){
				return element2.length - element1.length;
			});
		},

		// A palindrome start in its center, test every center the sequence has
		// and expands the boundaries low and up
		findPalindromicSequences: function(){
			for(var center = 0; center < palindrone.searchedSequenceLength * 2; center += 1){
				try{
					var boundaries = palindrone.fn.testCenter(center);
					palindrone.foundPalindromicSequences.push({
						'index': boundaries.low,
						'length': boundaries.up - boundaries.low + 1,
						'content': palindrone.searchedSequence.slice(boundaries.low, boundaries.up + 1)
					});
				} catch (e){
					// No palindrome found.
				}
			}
		},

		testCenter: function(center){
			var lowBound = Math.floor(center / 2);
			var upBound = lowBound + center%2;

			// we don't need to test if a single character is a palindrome
			if(lowBound === upBound){
				lowBound --;
				upBound ++;
			}

			if(palindrone.searchedSequence[upBound] === palindrone.searchedSequence[lowBound]){
				return palindrone.fn.testBoundaries(lowBound, upBound);
			} else {
				throw new Error('Center does not create a palindrome');
			}
		},

		testBoundaries: function(lowBound, upBound){
			var boundaries = {
				'low': lowBound,
				'up': upBound
			};
			lowBound -= 1;
			upBound += 1;
			if(palindrone.searchedSequenceLength > upBound &&
				 0 <= lowBound &&
					 palindrone.searchedSequence[upBound] === palindrone.searchedSequence[lowBound]){
				boundaries = palindrone.fn.testBoundaries(lowBound, upBound);
			}
			return boundaries;
		}
	};

	// Expose the module
	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
		module.exports = palindrone;
	} else {
		window.palindrone = palindrone;
	}
})();
