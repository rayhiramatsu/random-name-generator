# random-name-generator


## Notes:

Merriam-Webster's Collegiate Thesaurus API come with a set of limitations/quirks I've noticed:  

- the API only allows for a ***single*** and ***explicit*** search term, i.e., you *must* include some kind of search term/word
- when searching, returned object can manifest in a few ways (in no particular order):

1. Valid input (an actual word that has and/or the thesaurus has a record of synonyms)
2. Invalid input- when search term is gibberish (not a word at all, e.g. xzyylix)
3. Invalid input- is a word, but doesn't have synonyms in records


### Case: Valid Input


#### Word: "Large"
