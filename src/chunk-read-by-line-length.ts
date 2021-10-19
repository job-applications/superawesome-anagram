import * as fs from 'fs'
import * as readline from 'readline'

export type LineGroup = string[];

export const isLineNewGroup = (group: LineGroup, line: string): boolean => {
  return group[group.length - 1].length !== line.length
}

export async function * chunkReadByLineLength(fileName: string) {
  const fileStream = fs.createReadStream(fileName)

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Number.POSITIVE_INFINITY,
  })

  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  let group: LineGroup = []

  for await (const line of rl as any) {
    // Each line in input.txt will be successively available here as `line`.
    if (group.length > 0 && isLineNewGroup(group, line)) {
      yield group
      group = []
    }

    group.push(line)
  }

  if (group.length > 0) {
    yield group
  }
}
