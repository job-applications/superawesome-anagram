import {expect, test} from '@oclif/test'

import { isAnagram } from '../src/is-anagram';

describe('isAnagram', () => {
  test
  .it('returns true when strings are identical', () => {
    expect(isAnagram('abc', 'abc')).to.equal(true);
  })

  test
  .it('returns false when strings are not an equal length', () => {
    expect(isAnagram('abc', 'abcd')).to.equal(false);
  })

  test
  .it('returns false when strings are not an anagram of each other', () => {
    expect(isAnagram('abc', 'unf')).to.equal(false);
  })

  test
  .it('returns true when strings are an anagram of each other', () => {
    expect(isAnagram('abc', 'cba')).to.equal(true);
  })
})
