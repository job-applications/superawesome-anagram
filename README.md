superawesome-anagram
====================

<!-- toc -->
* [Prerequisites](#prerequisites)
* [Assumptions](#assumptions)
* [Usage](#usage)
* [Implementation](#implementation)
<!-- tocstop -->
Prerequisites
---------------

* Node.js 14.18.1 (LTS) - it will likely work with earlier versions
* Tested using Linux but should work on macOS and Windows also

Assumptions
---------------

* The words in the input file are ordered by size
* There will be no random blank lines in the file
* Words in the input file are already lowercased although this could easily be added as a new feature
* Line endings will be LF or CRLF
* There won't be any punctuation

Usage
---------------
<!-- usage -->
```sh-session
git clone https://github.com/job-applications/superawesome-anagram
npm install
./bin/run [your file name]
```
<!-- usagestop -->

Alternatively, you can use `yarn perform [your file name]`

Implementation
---------------

> a. chosen language,

This was implemented using TypeScript with oclif to generate out the core CLI structure.

> b. how we can run your code

Hopefully the usage instructures should cover this okay!

> c. Big O analysis

Add analysis.

> d. reasons behind data structures chosen

For the find-anagrams function, I chose an object because it felt quite easy to reason about. It's a relatively efficient way to add new matching words to the object while only having to sort the characters once. Using a set also means we don't have to worry about checking for duplicates.

I looked at using a library for the i/o although in the end I followed [an example on the official Node.js documentation](https://nodejs.org/api/readline.html#readline_example_read_file_stream_line_by_line) for reading a file one line at a time. A generator provided a flexible option to pause the method when enough lines have been read in (e.g. all lines of the same length, before moving onto the next group).

> e. what you would do given more time

oclif worked well for generating the command line structure although it seems to be somewhat between releases. There is a blog about the upcoming v2 release although this hasn't gone stable and I came across a few issues when testing it.

v1 is using an older version of most libraries although yarn audit didn't reveal any critical vulnerabilities. However, the out of date libraries have their own issues. For example, I came across some typescript typing issues when trying to publish my package, and errors with the default eslint rules.

Given more time, I would potentially have packaged this and released it onto npm so it could be run easily using npx. oclif can produce a few different bundle types, and transpiles them from TypeScript to JavaScript, which should be more performant to run. However, as noted, I did hit a few issues with oclif like npm publish throwing TypeScript errors. I think this is resolvable with a little more time.

It would be good to test this with a more diverse set of input (e.g. multiple languages).
