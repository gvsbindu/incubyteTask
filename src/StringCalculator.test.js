
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import StringCalculator from './StringCalculator';

describe('StringCalculator Component', () => {
  beforeEach(() => {
    render(<StringCalculator />);
  });

  test('calculates the sum of valid numbers', () => {
    fireEvent.change(screen.getByPlaceholderText(/Enter numbers or a string/i), {
      target: { value: '1, 2, 3' },
    });
    fireEvent.click(screen.getByText(/Calculate Sum/i));
    expect(screen.getByText(/Sum Result: 6/i)).toBeInTheDocument();
  });

  test('shows alert for negative numbers', () => {
    global.alert = jest.fn(); 

    fireEvent.change(screen.getByPlaceholderText(/Enter numbers or a string/i), {
      target: { value: '1, -2, 3' },
    });
    fireEvent.click(screen.getByText(/Calculate Sum/i));
    expect(global.alert).toHaveBeenCalledWith('Negative numbers not allowed: -2');
  });

  test('shows message when no valid numbers are present', () => {
    fireEvent.change(screen.getByPlaceholderText(/Enter numbers or a string/i), {
      target: { value: 'abc' },
    });
    fireEvent.click(screen.getByText(/Calculate Sum/i));
    expect(screen.getByText(/Input does not contain any valid numbers/i)).toBeInTheDocument();
  });

  test('checks if a string is a palindrome', () => {
    fireEvent.change(screen.getByPlaceholderText(/Enter numbers or a string/i), {
      target: { value: 'racecar' },
    });
    fireEvent.click(screen.getByText(/Check Palindrome/i));
    expect(screen.getByText(/"racecar" is a palindrome/i)).toBeInTheDocument();
  });

  test('counts vowels and consonants correctly', () => {
    fireEvent.change(screen.getByPlaceholderText(/Enter numbers or a string/i), {
      target: { value: 'Hello World' },
    });
    fireEvent.click(screen.getByText(/Count Vowels & Consonants/i));
    expect(screen.getByText(/Vowel Count: 3/i)).toBeInTheDocument();
    expect(screen.getByText(/Consonant Count: 7/i)).toBeInTheDocument();
  });

  test('reverses the string correctly', () => {
    fireEvent.change(screen.getByPlaceholderText(/Enter numbers or a string/i), {
      target: { value: 'Hello' },
    });
    fireEvent.click(screen.getByText(/Reverse String/i));
    expect(screen.getByText(/Reversed String: olleH/i)).toBeInTheDocument();
  });

  test('checks if two strings are anagrams', () => {
    fireEvent.change(screen.getByPlaceholderText(/Enter numbers or a string/i), {
      target: { value: 'listen' },
    });
    fireEvent.change(screen.getByPlaceholderText(/Enter another string for anagram check/i), {
      target: { value: 'silent' },
    });
    expect(screen.getByText(/Yes, they are anagrams/i)).toBeInTheDocument();
  });

  test('shows that two strings are not anagrams', () => {
    fireEvent.change(screen.getByPlaceholderText(/Enter numbers or a string/i), {
      target: { value: 'hello' },
    });
    fireEvent.change(screen.getByPlaceholderText(/Enter another string for anagram check/i), {
      target: { value: 'world' },
    });
    expect(screen.getByText(/No, they are not anagrams/i)).toBeInTheDocument();
  });
});
