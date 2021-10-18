import { sortString } from "./sort-string";

export const findAnagrams = (stringArr: string[]): string[][] => {
  const dictionary: Record<string, Set<string>> = {};

  stringArr.forEach(str => {
    const sortedStr = sortString(str);
    if (!dictionary[sortedStr]) {
      dictionary[sortedStr] = new Set();
    }
    dictionary[sortedStr].add(str);
  })

  return Object.values(dictionary).map(values => Array.from(values));
};
