import { Command } from '@oclif/command'
import { chunkReadByLineLength } from './chunk-read-by-line-length';
import { findAnagrams } from './find-anagrams';

export const findAnagramsInFile = async (filename: string, log: Command["log"]): Promise<void> => {
  for await(const lines of chunkReadByLineLength(filename)) {
    findAnagrams(lines).forEach(group => log(group.join(',')));
  }
}
