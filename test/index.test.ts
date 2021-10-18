import {expect, test} from '@oclif/test'

import cmd = require('../src')

describe('superawesome-anagram', () => {
  test
  .stderr()
  .do(() => cmd.run([]))
  .catch(ctx => {
    expect(ctx.message).to.contain('Missing 1 required arg:')
    expect(ctx.message).to.contain('file  Provide a data file containing a sorted list of anagrams')
    expect(ctx.message).to.contain('See more help with --help')
  })
  .it('requires FILE argument')

  test
  .stdout()
  .do(() => cmd.run(['test/data/two-groups-of-lines.txt']))
  .it('returns a list of anagrams to the terminal', ctx => {
    expect(ctx.stdout).to.contain('abc,bac,cba\nfun,unf\nhello\n')
  })
})
