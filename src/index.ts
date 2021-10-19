import {Command, flags} from '@oclif/command'
import {findAnagramsInFile} from './find-anagrams-in-file'

class SuperawesomeAnagram extends Command {
  static description = 'describe the command here'

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({char: 'v'}),
    help: flags.help({char: 'h'}),
  }

  static args = [{
    name: 'file',
    required: true,
    description: 'Provide a data file containing a sorted list of anagrams',
  }]

  async run() {
    const {args} = this.parse(SuperawesomeAnagram)
    await findAnagramsInFile(args.file, this.log)
  }
}

export = SuperawesomeAnagram
