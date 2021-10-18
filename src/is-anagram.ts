import { sortString } from "./sort-string";

export const isAnagram = (string1: string, string2: string): boolean => {
  if ( string1 === string2 ) {
    return true;
  }

  if (string1.length !== string2.length) {
    return false;
  }

  // TODO: This is not the most efficient way to find an anagram
  return sortString(string1) === sortString(string2);
}
