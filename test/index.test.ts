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
  .do(() => cmd.run(['--name', 'jeff']))
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
