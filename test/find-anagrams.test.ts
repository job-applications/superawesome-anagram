import {expect, test} from '@oclif/test'

import {findAnagrams} from '../src/find-anagrams'

describe('findAnagrams', () => {
  test
  .it('breaks a list of inputs into an array of anagrams', () => {
    expect(findAnagrams(['abc', 'fun', 'bac', 'fun', 'cba', 'unf', 'hello'])).to.deep.equal([
      ['abc', 'bac', 'cba'],
      ['fun', 'unf'],
      ['hello'],
    ])
  })
})
