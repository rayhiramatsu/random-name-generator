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

'[
    {
        "meta": {
            "metadata irrelevant to project here"
            },
            "syns": [
                ["big", "biggish", "boxcar"],
                ["big","crowd-pleasing","du jour"]
            ],
            "ants": [
                ["bantam","dinky","dwarf"],
                ["out","unfashionable", "unpopular"]
            ],
            "offensive": false
        },
    },
    {
        // ...more random objects here
    }
]'


In short, to access the "syns" (synonyms) key, indexing would follow the following format:

`data[0].meta.syns[0][index]`














[
    {
        "meta": {
            "id": "large",
            "uuid": "f1801a66-edd4-40a9-aef5-9d78529d77ed",
            "src": "coll_thes",
            "section": "alpha",
            "target": {
                "tuuid": "90e9a6d5-c2fc-405c-8a45-31b2ee5f4a1b",
                "tsrc": "collegiate"
            },
            "syns": [
                [
                    "big",
                    "biggish",
                    "boxcar",
                    "bulky",
                    "considerable",
                    "goodly",
                    "grand",
                    "great",
                    "handsome",
                    "hefty",
                    "hulking",
                    "husky",
                    "largish",
                    "outsize",
                    "oversize",
                    "sizable",
                    "substantial",
                    "tidy",
                    "voluminous"
                ],
                [
                    "big",
                    "crowd-pleasing",
                    "du jour",
                    "faddish",
                    "faddy",
                    "fashionable",
                    "favorite",
                    "happening",
                    "hot",
                    "in",
                    "modish",
                    "pop",
                    "popular",
                    "popularized",
                    "red-hot",
                    "vogue",
                    "voguish"
                ]
            ],
            "ants": [
                [
                    "bantam",
                    "dinky",
                    "dwarf",
                    "dwarfish",
                    "little",
                    "puny",
                    "shrimpy",
                    "small",
                    "smallish",
                    "undersized"
                ],
                [
                    "out",
                    "unfashionable",
                    "unpopular"
                ]
            ],
            "offensive": false
        },
        "hwi": {
            "hw": "large"
        },
        "fl": "adjective",
    },
    {
        // ...more random objects here
    }
]

### Case: asdf, data[0] is a string
### Case: zxyzxiix, data[0] is undefined
### Case: large, data[0] is an object




###: IF typeof data[0] === undefined, API is failing to
###: IF typeof data[0] === string, API is retrieving suggested words
