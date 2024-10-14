import React, { useState } from 'react';
import './App.css';

const StringCalculator = () => {
  const [input, setInput] = useState('');
  const [sumResult, setSumResult] = useState(null);
  const [palindromeResult, setPalindromeResult] = useState(null);
  const [vowelCount, setVowelCount] = useState(null);
  const [consonantCount, setConsonantCount] = useState(null);
  const [reversedString, setReversedString] = useState('');
  const [anagramResult, setAnagramResult] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const calculateSum = () => {
    const numbers = input.split(/[,; ]+/).map(num => parseFloat(num.trim()));
    const negatives = numbers.filter(num => num < 0);
    
    if (negatives.length > 0) {
      return alert(`Negative numbers not allowed: ${negatives.join(', ')}`);
    }
  
    const validNumbers = numbers.filter(num => !isNaN(num));
    
    if (validNumbers.length === 0) {
      setSumResult('Input does not contain any valid numbers.');
      return;
    }
    
    const sum = validNumbers.reduce((acc, num) => acc + num, 0);
    setSumResult(sum);
    setPalindromeResult(null);
    setVowelCount(null);
    setConsonantCount(null);
    setReversedString('');
    setAnagramResult('');
  };
  

  const checkPalindrome = () => {
    if (input.trim() === '') {
      setPalindromeResult(null);
      return;
    }

    const isPalin = isPalindrome(input);
    setPalindromeResult(isPalin);
    setSumResult(null);
  };

  const isPalindrome = (str) => {
    const cleanedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
  };

  const countVowelsAndConsonants = () => {
    const vowels = input.match(/[aeiou]/gi) || [];
    const consonants = input.match(/[bcdfghjklmnpqrstvwxyz]/gi) || [];
    
    setVowelCount(vowels.length);
    setConsonantCount(consonants.length);
    setSumResult(null);
    setPalindromeResult(null);
    setReversedString('');
    setAnagramResult('');
  };

  const reverseString = () => {
    setReversedString(input.split('').reverse().join(''));
    setSumResult(null);
    setPalindromeResult(null);
    setVowelCount(null);
    setConsonantCount(null);
    setAnagramResult('');
  };

  const checkAnagram = (otherString) => {
    const sortedInput = input.split('').sort().join('');
    const sortedOther = otherString.split('').sort().join('');
    
    const isAnagram = sortedInput === sortedOther;
    setAnagramResult(isAnagram ? 'Yes, they are anagrams' : 'No, they are not anagrams');
    setSumResult(null);
    setPalindromeResult(null);
    setVowelCount(null);
    setConsonantCount(null);
    setReversedString('');
  };

  return (
    <div className="container">
      <h1>String Calculator</h1>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Enter numbers or a string"
      />
      <button onClick={calculateSum}>Calculate Sum</button>
      {sumResult !== null && <h2>Sum Result: {sumResult}</h2>}
      
      <button onClick={checkPalindrome}>Check Palindrome</button>
      {palindromeResult !== null && (
        <h2>
          "{input}" is {palindromeResult ? 'a' : 'not a'} palindrome
        </h2>
      )}
      
      <button onClick={countVowelsAndConsonants}>Count Vowels & Consonants</button>
      {vowelCount !== null && <h2>Vowel Count: {vowelCount}</h2>}
      {consonantCount !== null && <h2>Consonant Count: {consonantCount}</h2>}

      <button onClick={reverseString}>Reverse String</button>
      {reversedString && <h2>Reversed String: {reversedString}</h2>}

      <input
        type="text"
        placeholder="Enter another string for anagram check"
        onChange={(e) => checkAnagram(e.target.value)}
      />
      {anagramResult && <h2>{anagramResult}</h2>}
    </div>
  );
};

export default StringCalculator;
