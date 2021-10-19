import {expect, test} from '@oclif/test'
// eslint-disable-next-line unicorn/import-style
import * as path from 'path'

import {chunkReadByLineLength} from '../src/chunk-read-by-line-length'

// eslint-disable-next-line unicorn/prefer-module
const SCRIPT_DIR = __dirname
const EMPTY_FILE = path.join(SCRIPT_DIR, 'data/empty-file.txt')
const TWO_GROUPS_OF_LINES = path.join(SCRIPT_DIR, 'data/two-groups-of-lines.txt')

describe('chunkReadByLineLength', () => {
  test
  .it('does not yield an empty group of data', async () => {
    const data = []
    for await (const lines of chunkReadByLineLength(EMPTY_FILE)) {
      data.push(lines)
    }
    expect(data).to.deep.equal([])
  })

  test
  .it('chunks each read into an array of same-length lines', async () => {
    const data = []
    for await (const lines of chunkReadByLineLength(TWO_GROUPS_OF_LINES)) {
      data.push(lines)
    }
    expect(data).to.deep.equal([
      ['abc', 'fun', 'bac', 'fun', 'cba', 'unf'],
      ['hello'],
    ])
  })
})
