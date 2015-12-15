Palindrone.js 1.0.0
---

# Usage

The basic usage is pretty straightforward:

    var palindromes = palindrone('A palindromic sequence. Or is it?');

But you can refer to the functions listed below directly from the `fn` object :

    palindrone.fn.init('A palindromic sequence. Or is it?');
    palindrone.fn.findPalindromicSequences();
     
Also, you can use the defined attributes listed below :

    console.log(palindrone.foundPalindromicSequences);

# Functions

## `palindrone`
Searchs for palindromic sequences on the argument string.

Will call in order:

- `palindrone.fn.init`, passing its argument diretly
- `palindrone.fn.findPalindromicSequences`
- `palindrone.fn.sortFoundPalindromicSequences`

And will return the 3 first palindromic sequences found.

### Argument 
 - searchedSequence (`string`) : The sequence to search palindromes on.

## `palindrone.fn.init`
Initializes a new palindrone object. 

Will also reset `palindrone.foundPalindromicSequences` to `[]`.

### Argument
 - searchedSequence (`string`): The sequence to search palindromes on.

## `palindrone.fn.sortFoundPalindromicSequences`
Sorts the array of found palindromic sequences.

Will use a custom `sort` function that sort the array based on the length of the palindromic sequence.

## `palindrone.fn.testBoundaries`
Tests if the new bounds form a palindrome.

Will calls itself recursively if the current bound values are the same and will return the last matching bounds.
Ensures the bounds never go outside the sequence to search.

### Arguments 
 - lowBound (`number`): The low bound of the sequence to test.
 - upBound (`number`): The up bound of the sequence to test.

### Returns
- (`object`): `{'low': lowBoundValue, 'up': upBoundValue}`

## `palindrone.fn.testCenter`
Tests if the argument value is the center of a palindrome.

We can define a palindrome as reflection of a sequence through a center. So we will test each possible center in the sequence and see if it is the center of a palindrome. 

This function will call `palindrone.fn.testBoundaries` with the first two bounds. Two cases exists regarding the value of the center to test :

- The center is an integer, in which case the center will be a character of the sequence. The first two bounds are the characters right before and after this character.
- The center is not an integer, in which case the center is the interspace between two characters.  The first two bounds are the characters right before and after this interspace.

e.g.

    center: 3
       |      -> low = 2, up = 4
       v
    0123456789...
    A palindromic sequence. Or is it?
    0123456789...
           ><
           |   -> low = 7, up = 8
    center: 7.5
           


### Argument
 - center (`number`): The center to test.

### Returns
- (`object`): `{'low': lowBoundValue, 'up': upBoundValue}`

### Throws
- (`Error`): The first two bound's values are not equal.


## `palindrone.fn.findPalindromicSequences`
Loops through all possible centers and test each one with `palindrone.fn.testCenter`.
    
Each time a palinfromic center is found, add it to the `palindrone.foundPalindromicSequences` array.

# Attributes

## `palindrone.searchedSequence`

(`string`): The sequence to search the palindromic sequences on.

## `palindrone.searchedSequenceLength`

(`number`): The length of `palindrone.searchedSequence`.

## `palindrone.foundPalindromicSequences`
(`array`): Array of found palindromic sequences in `palindrone.searchedSequence`.

A palindrome is described as:

    {
        'start': start index,
        'length': length of the palindrome,
        'content': content of the palindrome
    }
