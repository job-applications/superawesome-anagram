import {expect, test} from '@oclif/test'

import {sortString} from '../src/sort-string'

describe('sortString', () => {
  test
  .it('alphabetically sorts a string', () => {
    expect(sortString('cba')).to.equal('abc')
  })
})
