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


'
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
            "stems": [
                "large",
                "largeness",
                "largenesses",
                "larger",
                "largest",
                "largish"
            ],
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
        "def": [
            {
                "sseq": [
                    [
                        [
                            "sense",
                            {
                                "sn": "1",
                                "dt": [
                                    [
                                        "text",
                                        "of a size greater than average of its kind "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "he was hungry, so he ordered the {it}large{/it} pizza"
                                            }
                                        ]
                                    ]
                                ],
                                "syn_list": [
                                    [
                                        {
                                            "wd": "big"
                                        },
                                        {
                                            "wd": "biggish"
                                        },
                                        {
                                            "wd": "boxcar"
                                        },
                                        {
                                            "wd": "bulky"
                                        },
                                        {
                                            "wd": "considerable"
                                        },
                                        {
                                            "wd": "goodly"
                                        },
                                        {
                                            "wd": "grand"
                                        },
                                        {
                                            "wd": "great"
                                        },
                                        {
                                            "wd": "handsome"
                                        },
                                        {
                                            "wd": "hefty"
                                        },
                                        {
                                            "wd": "hulking"
                                        },
                                        {
                                            "wd": "husky"
                                        },
                                        {
                                            "wd": "largish"
                                        },
                                        {
                                            "wd": "outsize",
                                            "wvrs": [
                                                {
                                                    "wvl": "also",
                                                    "wva": "outsized"
                                                }
                                            ]
                                        },
                                        {
                                            "wd": "oversize",
                                            "wvrs": [
                                                {
                                                    "wvl": "or",
                                                    "wva": "oversized"
                                                }
                                            ]
                                        },
                                        {
                                            "wd": "sizable",
                                            "wvrs": [
                                                {
                                                    "wvl": "or",
                                                    "wva": "sizeable"
                                                }
                                            ]
                                        },
                                        {
                                            "wd": "substantial"
                                        },
                                        {
                                            "wd": "tidy"
                                        },
                                        {
                                            "wd": "voluminous"
                                        }
                                    ]
                                ],
                                "rel_list": [
                                    [
                                        {
                                            "wd": "astronomical",
                                            "wvrs": [
                                                {
                                                    "wvl": "also",
                                                    "wva": "astronomic"
                                                }
                                            ]
                                        },
                                        {
                                            "wd": "Brobdingnagian"
                                        },
                                        {
                                            "wd": "bumper"
                                        },
                                        {
                                            "wd": "Bunyanesque"
                                        },
                                        {
                                            "wd": "cavernous"
                                        },
                                        {
                                            "wd": "colossal"
                                        },
                                        {
                                            "wd": "cosmic",
                                            "wvrs": [
                                                {
                                                    "wvl": "also",
                                                    "wva": "cosmical"
                                                }
                                            ]
                                        },
                                        {
                                            "wd": "cyclopean"
                                        },
                                        {
                                            "wd": "elephantine"
                                        },
                                        {
                                            "wd": "enormous"
                                        },
                                        {
                                            "wd": "galactic"
                                        },
                                        {
                                            "wd": "gargantuan"
                                        },
                                        {
                                            "wd": "gigantic"
                                        },
                                        {
                                            "wd": "gross"
                                        },
                                        {
                                            "wd": "hellacious"
                                        },
                                        {
                                            "wd": "herculean"
                                        },
                                        {
                                            "wd": "heroic",
                                            "wvrs": [
                                                {
                                                    "wvl": "also",
                                                    "wva": "heroical"
                                                }
                                            ]
                                        },
                                        {
                                            "wd": "Himalayan"
                                        },
                                        {
                                            "wd": "huge"
                                        },
                                        {
                                            "wd": "humongous",
                                            "wvrs": [
                                                {
                                                    "wvl": "also",
                                                    "wva": "humungous"
                                                }
                                            ]
                                        },
                                        {
                                            "wd": "immense"
                                        },
                                        {
                                            "wd": "jumbo"
                                        },
                                        {
                                            "wd": "king-size",
                                            "wvrs": [
                                                {
                                                    "wvl": "or",
                                                    "wva": "king-sized"
                                                }
                                            ]
                                        },
                                        {
                                            "wd": "leviathan"
                                        },
                                        {
                                            "wd": "major"
                                        },
                                        {
                                            "wd": "mammoth"
                                        },
                                        {
                                            "wd": "massive"
                                        },
                                        {
                                            "wd": "monolithic"
                                        },
                                        {
                                            "wd": "monstrous"
                                        },
                                        {
                                            "wd": "monumental"
                                        },
                                        {
                                            "wd": "mountainous"
                                        },
                                        {
                                            "wd": "pharaonic"
                                        },
                                        {
                                            "wd": "prodigious"
                                        },
                                        {
                                            "wd": "staggering"
                                        },
                                        {
                                            "wd": "stupendous"
                                        },
                                        {
                                            "wd": "super"
                                        },
                                        {
                                            "wd": "super-duper"
                                        },
                                        {
                                            "wd": "supersized"
                                        },
                                        {
                                            "wd": "titanic"
                                        },
                                        {
                                            "wd": "tremendous"
                                        },
                                        {
                                            "wd": "vast"
                                        },
                                        {
                                            "wd": "vasty"
                                        },
                                        {
                                            "wd": "walloping"
                                        },
                                        {
                                            "wd": "whacking"
                                        },
                                        {
                                            "wd": "whopping"
                                        }
                                    ],
                                    [
                                        {
                                            "wd": "excessive"
                                        },
                                        {
                                            "wd": "exorbitant"
                                        },
                                        {
                                            "wd": "extravagant"
                                        },
                                        {
                                            "wd": "extreme"
                                        },
                                        {
                                            "wd": "immoderate"
                                        },
                                        {
                                            "wd": "inordinate"
                                        }
                                    ],
                                    [
                                        {
                                            "wd": "abundant"
                                        },
                                        {
                                            "wd": "ample"
                                        },
                                        {
                                            "wd": "appreciable"
                                        },
                                        {
                                            "wd": "copious"
                                        },
                                        {
                                            "wd": "plentiful"
                                        }
                                    ],
                                    [
                                        {
                                            "wd": "fat"
                                        },
                                        {
                                            "wd": "thick"
                                        }
                                    ],
                                    [
                                        {
                                            "wd": "capacious"
                                        },
                                        {
                                            "wd": "commodious"
                                        },
                                        {
                                            "wd": "roomy"
                                        },
                                        {
                                            "wd": "spacious"
                                        }
                                    ]
                                ],
                                "near_list": [
                                    [
                                        {
                                            "wd": "diminutive"
                                        },
                                        {
                                            "wd": "half-pint"
                                        },
                                        {
                                            "wd": "infinitesimal"
                                        },
                                        {
                                            "wd": "Lilliputian"
                                        },
                                        {
                                            "wd": "little bitty"
                                        },
                                        {
                                            "wd": "microminiature"
                                        },
                                        {
                                            "wd": "microscopic",
                                            "wvrs": [
                                                {
                                                    "wvl": "also",
                                                    "wva": "microscopical"
                                                }
                                            ]
                                        },
                                        {
                                            "wd": "mini"
                                        },
                                        {
                                            "wd": "miniature"
                                        },
                                        {
                                            "wd": "minuscule"
                                        },
                                        {
                                            "wd": "minute"
                                        },
                                        {
                                            "wd": "pint-size",
                                            "wvrs": [
                                                {
                                                    "wvl": "or",
                                                    "wva": "pint-sized"
                                                }
                                            ]
                                        },
                                        {
                                            "wd": "pocket-size",
                                            "wvrs": [
                                                {
                                                    "wvl": "also",
                                                    "wva": "pocket-sized"
                                                }
                                            ]
                                        },
                                        {
                                            "wd": "pygmy"
                                        },
                                        {
                                            "wd": "teensy"
                                        },
                                        {
                                            "wd": "teensy-weensy"
                                        },
                                        {
                                            "wd": "teeny"
                                        },
                                        {
                                            "wd": "teeny-weeny"
                                        },
                                        {
                                            "wd": "tiny"
                                        },
                                        {
                                            "wd": "wee"
                                        }
                                    ],
                                    [
                                        {
                                            "wd": "petite"
                                        },
                                        {
                                            "wd": "slender"
                                        },
                                        {
                                            "wd": "slight"
                                        },
                                        {
                                            "wd": "slim"
                                        },
                                        {
                                            "wd": "thin"
                                        }
                                    ]
                                ],
                                "ant_list": [
                                    [
                                        {
                                            "wd": "bantam"
                                        },
                                        {
                                            "wd": "dinky"
                                        },
                                        {
                                            "wd": "dwarf"
                                        },
                                        {
                                            "wd": "dwarfish"
                                        },
                                        {
                                            "wd": "little"
                                        },
                                        {
                                            "wd": "puny"
                                        },
                                        {
                                            "wd": "shrimpy"
                                        },
                                        {
                                            "wd": "small"
                                        },
                                        {
                                            "wd": "smallish"
                                        },
                                        {
                                            "wd": "undersized",
                                            "wvrs": [
                                                {
                                                    "wvl": "also",
                                                    "wva": "undersize"
                                                }
                                            ]
                                        }
                                    ]
                                ]
                            }
                        ]
                    ],
                    [
                        [
                            "sense",
                            {
                                "sn": "2",
                                "dt": [
                                    [
                                        "text",
                                        "enjoying widespread favor or approval "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "a color that will be very {it}large{/it} this spring if the fashion designers have their way"
                                            }
                                        ]
                                    ]
                                ],
                                "syn_list": [
                                    [
                                        {
                                            "wd": "big"
                                        },
                                        {
                                            "wd": "crowd-pleasing"
                                        },
                                        {
                                            "wd": "du jour"
                                        },
                                        {
                                            "wd": "faddish"
                                        },
                                        {
                                            "wd": "faddy"
                                        },
                                        {
                                            "wd": "fashionable"
                                        },
                                        {
                                            "wd": "favorite"
                                        },
                                        {
                                            "wd": "happening"
                                        },
                                        {
                                            "wd": "hot"
                                        },
                                        {
                                            "wd": "in"
                                        },
                                        {
                                            "wd": "modish"
                                        },
                                        {
                                            "wd": "pop"
                                        },
                                        {
                                            "wd": "popular"
                                        },
                                        {
                                            "wd": "popularized"
                                        },
                                        {
                                            "wd": "red-hot"
                                        },
                                        {
                                            "wd": "vogue"
                                        },
                                        {
                                            "wd": "voguish"
                                        }
                                    ]
                                ],
                                "rel_list": [
                                    [
                                        {
                                            "wd": "semipopular"
                                        }
                                    ],
                                    [
                                        {
                                            "wd": "preferred"
                                        },
                                        {
                                            "wd": "selected"
                                        }
                                    ],
                                    [
                                        {
                                            "wd": "desirable"
                                        },
                                        {
                                            "wd": "liked"
                                        },
                                        {
                                            "wd": "wanted"
                                        }
                                    ],
                                    [
                                        {
                                            "wd": "celebrated"
                                        },
                                        {
                                            "wd": "famed"
                                        },
                                        {
                                            "wd": "famous"
                                        },
                                        {
                                            "wd": "noted"
                                        },
                                        {
                                            "wd": "notorious"
                                        },
                                        {
                                            "wd": "prominent"
                                        },
                                        {
                                            "wd": "renowned"
                                        },
                                        {
                                            "wd": "well-known"
                                        }
                                    ],
                                    [
                                        {
                                            "wd": "fabled"
                                        },
                                        {
                                            "wd": "fabulous"
                                        },
                                        {
                                            "wd": "legendary"
                                        }
                                    ],
                                    [
                                        {
                                            "wd": "leading"
                                        },
                                        {
                                            "wd": "notable"
                                        },
                                        {
                                            "wd": "outstanding"
                                        },
                                        {
                                            "wd": "prominent"
                                        },
                                        {
                                            "wd": "remarkable"
                                        }
                                    ],
                                    [
                                        {
                                            "wd": "important"
                                        },
                                        {
                                            "wd": "significant"
                                        }
                                    ]
                                ],
                                "near_list": [
                                    [
                                        {
                                            "wd": "washed-up"
                                        }
                                    ],
                                    [
                                        {
                                            "wd": "despised"
                                        },
                                        {
                                            "wd": "detested"
                                        },
                                        {
                                            "wd": "disliked"
                                        },
                                        {
                                            "wd": "hated"
                                        },
                                        {
                                            "wd": "rejected"
                                        }
                                    ],
                                    [
                                        {
                                            "wd": "insignificant"
                                        },
                                        {
                                            "wd": "unimportant"
                                        }
                                    ],
                                    [
                                        {
                                            "wd": "indistinguished"
                                        },
                                        {
                                            "wd": "unexceptional"
                                        }
                                    ],
                                    [
                                        {
                                            "wd": "anonymous"
                                        },
                                        {
                                            "wd": "nameless"
                                        },
                                        {
                                            "wd": "obscure"
                                        },
                                        {
                                            "wd": "unknown"
                                        }
                                    ],
                                    [
                                        {
                                            "wd": "inconspicuous"
                                        }
                                    ]
                                ],
                                "ant_list": [
                                    [
                                        {
                                            "wd": "out"
                                        },
                                        {
                                            "wd": "unfashionable"
                                        },
                                        {
                                            "wd": "unpopular"
                                        }
                                    ]
                                ]
                            }
                        ]
                    ]
                ]
            }
        ],
        "shortdef": [
            "of a size greater than average of its kind",
            "enjoying widespread favor or approval"
        ]
    },
    {
        "meta": {
            "id": "large",
            "uuid": "aa8e80c2-9729-4ff1-bbf0-28bb6f49d343",
            "src": "coll_thes",
            "section": "alpha",
            "target": {
                "tuuid": "1b444df7-f356-4b29-83cc-8bd4c598d6ca",
                "tsrc": "collegiate"
            },
            "stems": [
                "large"
            ],
            "syns": [
                [
                    "expensively",
                    "extravagantly",
                    "fatly",
                    "grandly",
                    "high",
                    "lavishly",
                    "luxuriously",
                    "opulently",
                    "palatially",
                    "plushly",
                    "richly",
                    "sumptuously"
                ]
            ],
            "ants": [
                [
                    "austerely",
                    "humbly",
                    "modestly",
                    "plainly",
                    "simply"
                ]
            ],
            "offensive": false
        },
        "hwi": {
            "hw": "large"
        },
        "fl": "adverb",
        "def": [
            {
                "sseq": [
                    [
                        [
                            "sense",
                            {
                                "dt": [
                                    [
                                        "text",
                                        "in a luxurious manner "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "college students living {it}large{/it} on generous allowances from indulgent parents"
                                            }
                                        ]
                                    ]
                                ],
                                "syn_list": [
                                    [
                                        {
                                            "wd": "expensively"
                                        },
                                        {
                                            "wd": "extravagantly"
                                        },
                                        {
                                            "wd": "fatly"
                                        },
                                        {
                                            "wd": "grandly"
                                        },
                                        {
                                            "wd": "high"
                                        },
                                        {
                                            "wd": "lavishly"
                                        },
                                        {
                                            "wd": "luxuriously"
                                        },
                                        {
                                            "wd": "opulently"
                                        },
                                        {
                                            "wd": "palatially"
                                        },
                                        {
                                            "wd": "plushly"
                                        },
                                        {
                                            "wd": "richly"
                                        },
                                        {
                                            "wd": "sumptuously"
                                        }
                                    ]
                                ],
                                "rel_list": [
                                    [
                                        {
                                            "wd": "imposingly"
                                        },
                                        {
                                            "wd": "impressively"
                                        },
                                        {
                                            "wd": "magnificently"
                                        },
                                        {
                                            "wd": "splendidly"
                                        }
                                    ],
                                    [
                                        {
                                            "wd": "grandiosely"
                                        },
                                        {
                                            "wd": "ostentatiously"
                                        },
                                        {
                                            "wd": "pompously"
                                        },
                                        {
                                            "wd": "pretentiously"
                                        }
                                    ],
                                    [
                                        {
                                            "wd": "affluently"
                                        },
                                        {
                                            "wd": "comfortably"
                                        },
                                        {
                                            "wd": "fine"
                                        },
                                        {
                                            "wd": "wealthily"
                                        }
                                    ],
                                    [
                                        {
                                            "wd": "immoderately"
                                        },
                                        {
                                            "wd": "indulgently"
                                        },
                                        {
                                            "wd": "intemperately"
                                        },
                                        {
                                            "wd": "prodigally"
                                        },
                                        {
                                            "wd": "wantonly"
                                        },
                                        {
                                            "wd": "wastefully"
                                        }
                                    ]
                                ],
                                "near_list": [
                                    [
                                        {
                                            "wd": "unpretentiously"
                                        }
                                    ],
                                    [
                                        {
                                            "wd": "cheaply"
                                        },
                                        {
                                            "wd": "economically"
                                        },
                                        {
                                            "wd": "frugally"
                                        },
                                        {
                                            "wd": "inexpensively"
                                        },
                                        {
                                            "wd": "meagerly"
                                        },
                                        {
                                            "wd": "poorly"
                                        },
                                        {
                                            "wd": "skimpily"
                                        },
                                        {
                                            "wd": "sparely"
                                        },
                                        {
                                            "wd": "sparingly"
                                        },
                                        {
                                            "wd": "thriftily"
                                        }
                                    ],
                                    [
                                        {
                                            "wd": "conservatively"
                                        },
                                        {
                                            "wd": "moderately"
                                        },
                                        {
                                            "wd": "prudently"
                                        },
                                        {
                                            "wd": "reasonably"
                                        },
                                        {
                                            "wd": "restrainedly"
                                        },
                                        {
                                            "wd": "sensibly"
                                        },
                                        {
                                            "wd": "temperately"
                                        }
                                    ]
                                ],
                                "ant_list": [
                                    [
                                        {
                                            "wd": "austerely"
                                        },
                                        {
                                            "wd": "humbly"
                                        },
                                        {
                                            "wd": "modestly"
                                        },
                                        {
                                            "wd": "plainly"
                                        },
                                        {
                                            "wd": "simply"
                                        }
                                    ]
                                ]
                            }
                        ]
                    ]
                ]
            }
        ],
        "shortdef": [
            "in a luxurious manner"
        ]
    },
    {
        "meta": {
            "id": "large-minded",
            "uuid": "a5f7898e-f1dc-4916-9b98-0d12cf545f6f",
            "src": "CTcompile",
            "section": "alpha",
            "stems": [
                "large-minded"
            ],
            "syns": [
                [
                    "forbearing",
                    "indulgent",
                    "lenient",
                    "permissive",
                    "tolerant",
                    "advanced",
                    "contemporary",
                    "modern",
                    "extreme",
                    "broad-minded",
                    "liberal",
                    "nonconventional",
                    "nonorthodox",
                    "nontraditional",
                    "open-minded",
                    "progressive",
                    "radical",
                    "unconventional",
                    "unorthodox",
                    "impartial",
                    "objective",
                    "unbiased"
                ]
            ],
            "ants": [
                [
                    "conservative",
                    "conventional",
                    "hidebound",
                    "nonprogressive",
                    "old-fashioned",
                    "orthodox",
                    "stodgy",
                    "traditional",
                    "hard",
                    "rigid",
                    "strict",
                    "doctrinal",
                    "dogmatic",
                    "bigoted",
                    "blinkered",
                    "intolerant",
                    "narrow-minded",
                    "reactionary",
                    "unreconstructed"
                ]
            ],
            "offensive": false
        },
        "hwi": {
            "hw": "large-minded"
        },
        "fl": "adjective",
        "def": [
            {
                "sseq": [
                    [
                        [
                            "sense",
                            {
                                "dt": [
                                    [
                                        "text",
                                        "as in {it}lenient{/it}, {it}tolerant{/it}"
                                    ]
                                ],
                                "sim_list": [
                                    [
                                        {
                                            "wd": "forbearing"
                                        },
                                        {
                                            "wd": "indulgent"
                                        },
                                        {
                                            "wd": "lenient"
                                        },
                                        {
                                            "wd": "permissive"
                                        },
                                        {
                                            "wd": "tolerant"
                                        }
                                    ],
                                    [
                                        {
                                            "wd": "advanced"
                                        },
                                        {
                                            "wd": "contemporary"
                                        },
                                        {
                                            "wd": "modern"
                                        }
                                    ],
                                    [
                                        {
                                            "wd": "extreme"
                                        }
                                    ],
                                    [
                                        {
                                            "wd": "broad-minded"
                                        },
                                        {
                                            "wd": "liberal"
                                        },
                                        {
                                            "wd": "nonconventional"
                                        },
                                        {
                                            "wd": "nonorthodox"
                                        },
                                        {
                                            "wd": "nontraditional"
                                        },
                                        {
                                            "wd": "open-minded"
                                        },
                                        {
                                            "wd": "progressive"
                                        },
                                        {
                                            "wd": "radical"
                                        },
                                        {
                                            "wd": "unconventional"
                                        },
                                        {
                                            "wd": "unorthodox"
                                        }
                                    ],
                                    [
                                        {
                                            "wd": "impartial"
                                        },
                                        {
                                            "wd": "objective"
                                        },
                                        {
                                            "wd": "unbiased"
                                        }
                                    ]
                                ],
                                "opp_list": [
                                    [
                                        {
                                            "wd": "conservative"
                                        },
                                        {
                                            "wd": "conventional"
                                        },
                                        {
                                            "wd": "hidebound"
                                        },
                                        {
                                            "wd": "nonprogressive"
                                        },
                                        {
                                            "wd": "old-fashioned"
                                        },
                                        {
                                            "wd": "orthodox"
                                        },
                                        {
                                            "wd": "stodgy"
                                        },
                                        {
                                            "wd": "traditional"
                                        }
                                    ],
                                    [
                                        {
                                            "wd": "hard"
                                        },
                                        {
                                            "wd": "rigid"
                                        },
                                        {
                                            "wd": "strict"
                                        }
                                    ],
                                    [
                                        {
                                            "wd": "doctrinal"
                                        },
                                        {
                                            "wd": "dogmatic",
                                            "wvrs": [
                                                {
                                                    "wvl": "also",
                                                    "wva": "dogmatical"
                                                }
                                            ]
                                        }
                                    ],
                                    [
                                        {
                                            "wd": "bigoted"
                                        },
                                        {
                                            "wd": "blinkered"
                                        },
                                        {
                                            "wd": "intolerant"
                                        },
                                        {
                                            "wd": "narrow-minded"
                                        }
                                    ],
                                    [
                                        {
                                            "wd": "reactionary"
                                        },
                                        {
                                            "wd": "unreconstructed"
                                        }
                                    ]
                                ]
                            }
                        ]
                    ]
                ]
            }
        ],
        "shortdef": [
            "as in lenient, tolerant"
        ]
    },
    {
        "meta": {
            "id": "by and large",
            "uuid": "4c0b4996-d7fb-4c08-be5a-0722c9dec69a",
            "src": "coll_thes",
            "section": "alpha",
            "target": {
                "tuuid": "c0867de8-63ee-4168-8272-41a4656988a3",
                "tsrc": "collegiate"
            },
            "stems": [
                "by and large"
            ],
            "syns": [
                [
                    "altogether",
                    "basically",
                    "chiefly",
                    "generally",
                    "largely",
                    "mainly",
                    "mostly",
                    "overall",
                    "predominantly",
                    "primarily",
                    "principally",
                    "substantially"
                ]
            ],
            "ants": [],
            "offensive": false
        },
        "hwi": {
            "hw": "by and large"
        },
        "fl": "adverb",
        "def": [
            {
                "sseq": [
                    [
                        [
                            "sense",
                            {
                                "dt": [
                                    [
                                        "text",
                                        "for the most part "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "{it}by and large{/it}, that information is accurate"
                                            }
                                        ]
                                    ]
                                ],
                                "syn_list": [
                                    [
                                        {
                                            "wd": "altogether"
                                        },
                                        {
                                            "wd": "basically"
                                        },
                                        {
                                            "wd": "chiefly"
                                        },
                                        {
                                            "wd": "generally"
                                        },
                                        {
                                            "wd": "largely"
                                        },
                                        {
                                            "wd": "mainly"
                                        },
                                        {
                                            "wd": "mostly"
                                        },
                                        {
                                            "wd": "overall"
                                        },
                                        {
                                            "wd": "predominantly"
                                        },
                                        {
                                            "wd": "primarily"
                                        },
                                        {
                                            "wd": "principally"
                                        },
                                        {
                                            "wd": "substantially"
                                        }
                                    ]
                                ],
                                "rel_list": [
                                    [
                                        {
                                            "wd": "about"
                                        },
                                        {
                                            "wd": "more or less"
                                        },
                                        {
                                            "wd": "most"
                                        },
                                        {
                                            "wd": "much"
                                        },
                                        {
                                            "wd": "near"
                                        },
                                        {
                                            "wd": "nearly"
                                        },
                                        {
                                            "wd": "next to"
                                        },
                                        {
                                            "wd": "nigh"
                                        },
                                        {
                                            "wd": "practically"
                                        },
                                        {
                                            "wd": "some"
                                        },
                                        {
                                            "wd": "virtually"
                                        },
                                        {
                                            "wd": "well-nigh"
                                        }
                                    ],
                                    [
                                        {
                                            "wd": "approximately"
                                        },
                                        {
                                            "wd": "broadly"
                                        },
                                        {
                                            "wd": "plus or minus"
                                        },
                                        {
                                            "wd": "roughly"
                                        }
                                    ],
                                    [
                                        {
                                            "wd": "commonly"
                                        },
                                        {
                                            "wd": "frequently"
                                        },
                                        {
                                            "wd": "normally"
                                        },
                                        {
                                            "wd": "ordinarily"
                                        },
                                        {
                                            "wd": "typically"
                                        },
                                        {
                                            "wd": "usually"
                                        }
                                    ],
                                    [
                                        {
                                            "wd": "incompletely"
                                        },
                                        {
                                            "wd": "partially"
                                        },
                                        {
                                            "wd": "partly"
                                        },
                                        {
                                            "wd": "rather"
                                        },
                                        {
                                            "wd": "somewhat"
                                        }
                                    ]
                                ],
                                "phrase_list": [
                                    [
                                        {
                                            "wd": "in general"
                                        },
                                        {
                                            "wd": "on the whole"
                                        }
                                    ]
                                ],
                                "near_list": [
                                    [
                                        {
                                            "wd": "completely"
                                        },
                                        {
                                            "wd": "entirely"
                                        },
                                        {
                                            "wd": "fully"
                                        },
                                        {
                                            "wd": "perfectly"
                                        },
                                        {
                                            "wd": "thoroughly"
                                        },
                                        {
                                            "wd": "totally"
                                        },
                                        {
                                            "wd": "wholly"
                                        }
                                    ],
                                    [
                                        {
                                            "wd": "barely"
                                        },
                                        {
                                            "wd": "hardly"
                                        },
                                        {
                                            "wd": "just"
                                        },
                                        {
                                            "wd": "marginally"
                                        },
                                        {
                                            "wd": "minimally"
                                        },
                                        {
                                            "wd": "scarcely"
                                        }
                                    ],
                                    [
                                        {
                                            "wd": "absolutely"
                                        },
                                        {
                                            "wd": "categorically"
                                        },
                                        {
                                            "wd": "unqualifiedly"
                                        }
                                    ]
                                ]
                            }
                        ]
                    ]
                ]
            }
        ],
        "shortdef": [
            "for the most part"
        ]
    },
    {
        "meta": {
            "id": "at large",
            "uuid": "599d0c55-6e52-4130-83ac-b4692b0335a8",
            "src": "CTenhance",
            "section": "phrases",
            "stems": [
                "at large"
            ],
            "syns": [
                [
                    "footloose",
                    "free",
                    "loose",
                    "unbound",
                    "unconfined",
                    "unrestrained"
                ]
            ],
            "ants": [
                [
                    "bound",
                    "confined",
                    "restrained",
                    "unfree"
                ]
            ],
            "offensive": false
        },
        "hwi": {
            "hw": "at large"
        },
        "fl": "phrase",
        "def": [
            {
                "sseq": [
                    [
                        [
                            "sense",
                            {
                                "dt": [
                                    [
                                        "text",
                                        "not bound, confined, or detained by force "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "We heard on the radio that there was an escaped prisoner {it}at large{/it}."
                                            }
                                        ]
                                    ]
                                ],
                                "syn_list": [
                                    [
                                        {
                                            "wd": "footloose"
                                        },
                                        {
                                            "wd": "free"
                                        },
                                        {
                                            "wd": "loose"
                                        },
                                        {
                                            "wd": "unbound"
                                        },
                                        {
                                            "wd": "unconfined"
                                        },
                                        {
                                            "wd": "unrestrained"
                                        }
                                    ]
                                ],
                                "rel_list": [
                                    [
                                        {
                                            "wd": "escaped"
                                        }
                                    ],
                                    [
                                        {
                                            "wd": "uncaged"
                                        },
                                        {
                                            "wd": "unchained"
                                        },
                                        {
                                            "wd": "unfettered"
                                        },
                                        {
                                            "wd": "unleashed"
                                        }
                                    ],
                                    [
                                        {
                                            "wd": "uncaught"
                                        }
                                    ],
                                    [
                                        {
                                            "wd": "unanchored"
                                        },
                                        {
                                            "wd": "unbolted"
                                        },
                                        {
                                            "wd": "undone"
                                        },
                                        {
                                            "wd": "unfastened"
                                        },
                                        {
                                            "wd": "untied"
                                        }
                                    ],
                                    [
                                        {
                                            "wd": "clear"
                                        },
                                        {
                                            "wd": "disengaged"
                                        }
                                    ]
                                ],
                                "phrase_list": [
                                    [
                                        {
                                            "wd": "at liberty"
                                        }
                                    ]
                                ],
                                "near_list": [
                                    [
                                        {
                                            "wd": "caught"
                                        }
                                    ],
                                    [
                                        {
                                            "wd": "caged"
                                        },
                                        {
                                            "wd": "chained"
                                        },
                                        {
                                            "wd": "enclosed",
                                            "wvrs": [
                                                {
                                                    "wvl": "also",
                                                    "wva": "inclosed"
                                                }
                                            ]
                                        },
                                        {
                                            "wd": "immured"
                                        },
                                        {
                                            "wd": "imprisoned"
                                        },
                                        {
                                            "wd": "leashed"
                                        },
                                        {
                                            "wd": "penned"
                                        }
                                    ],
                                    [
                                        {
                                            "wd": "anchored"
                                        },
                                        {
                                            "wd": "bolted"
                                        },
                                        {
                                            "wd": "fastened"
                                        },
                                        {
                                            "wd": "fettered"
                                        },
                                        {
                                            "wd": "manacled"
                                        },
                                        {
                                            "wd": "shackled"
                                        },
                                        {
                                            "wd": "tied"
                                        }
                                    ],
                                    [
                                        {
                                            "wd": "kidnapped",
                                            "wvrs": [
                                                {
                                                    "wvl": "also",
                                                    "wva": "kidnaped"
                                                }
                                            ]
                                        }
                                    ]
                                ],
                                "ant_list": [
                                    [
                                        {
                                            "wd": "bound"
                                        },
                                        {
                                            "wd": "confined"
                                        },
                                        {
                                            "wd": "restrained"
                                        },
                                        {
                                            "wd": "unfree"
                                        }
                                    ]
                                ]
                            }
                        ]
                    ]
                ]
            }
        ],
        "shortdef": [
            "not bound, confined, or detained by force"
        ]
    },
    {
        "meta": {
            "id": "write",
            "uuid": "64e7740a-c1ec-4b85-b9b9-482efd6f8d59",
            "src": "coll_thes",
            "section": "alpha",
            "target": {
                "tuuid": "b48a396c-4f92-4018-9eb9-2d0fa57d88de",
                "tsrc": "collegiate"
            },
            "stems": [
                "write",
                "writ",
                "writ large",
                "writ small",
                "write one's own ticket",
                "writes",
                "writing",
                "written",
                "wrote"
            ],
            "syns": [
                [
                    "author",
                    "pen",
                    "scratch (out)",
                    "scribble"
                ],
                [
                    "correspond"
                ]
            ],
            "ants": [],
            "offensive": false
        },
        "hwi": {
            "hw": "write"
        },
        "fl": "verb",
        "def": [
            {
                "sseq": [
                    [
                        [
                            "sense",
                            {
                                "sn": "1",
                                "dt": [
                                    [
                                        "text",
                                        "to compose and set down on paper the words of "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "a staunch supporter of the old school, he prefers to {it}write{/it} all of his letters by hand"
                                            }
                                        ]
                                    ]
                                ],
                                "syn_list": [
                                    [
                                        {
                                            "wd": "author"
                                        },
                                        {
                                            "wd": "pen"
                                        },
                                        {
                                            "wd": "scratch (out)"
                                        },
                                        {
                                            "wd": "scribble"
                                        }
                                    ]
                                ],
                                "rel_list": [
                                    [
                                        {
                                            "wd": "cast"
                                        },
                                        {
                                            "wd": "compose"
                                        },
                                        {
                                            "wd": "craft"
                                        },
                                        {
                                            "wd": "draft"
                                        },
                                        {
                                            "wd": "draw up"
                                        },
                                        {
                                            "wd": "formulate"
                                        },
                                        {
                                            "wd": "frame"
                                        },
                                        {
                                            "wd": "prepare"
                                        }
                                    ],
                                    [
                                        {
                                            "wd": "recast"
                                        },
                                        {
                                            "wd": "redraft"
                                        },
                                        {
                                            "wd": "revise"
                                        },
                                        {
                                            "wd": "rewrite"
                                        }
                                    ],
                                    [
                                        {
                                            "wd": "letter"
                                        },
                                        {
                                            "wd": "print"
                                        },
                                        {
                                            "wd": "type"
                                        },
                                        {
                                            "wd": "typewrite"
                                        }
                                    ],
                                    [
                                        {
                                            "wd": "record"
                                        },
                                        {
                                            "wd": "take down"
                                        },
                                        {
                                            "wd": "transcribe"
                                        }
                                    ],
                                    [
                                        {
                                            "wd": "autograph"
                                        },
                                        {
                                            "wd": "pencil (in)"
                                        },
                                        {
                                            "wd": "register"
                                        },
                                        {
                                            "wd": "sign"
                                        }
                                    ],
                                    [
                                        {
                                            "wd": "couch"
                                        },
                                        {
                                            "wd": "express"
                                        },
                                        {
                                            "wd": "phrase"
                                        },
                                        {
                                            "wd": "put"
                                        },
                                        {
                                            "wd": "word"
                                        }
                                    ]
                                ]
                            }
                        ]
                    ],
                    [
                        [
                            "sense",
                            {
                                "sn": "2",
                                "dt": [
                                    [
                                        "text",
                                        "to engage in an exchange of written messages "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "promise you'll {it}write{/it} while you're away"
                                            }
                                        ]
                                    ]
                                ],
                                "syn_list": [
                                    [
                                        {
                                            "wd": "correspond"
                                        }
                                    ]
                                ],
                                "rel_list": [
                                    [
                                        {
                                            "wd": "communicate"
                                        },
                                        {
                                            "wd": "intercommunicate"
                                        }
                                    ],
                                    [
                                        {
                                            "wd": "airmail"
                                        },
                                        {
                                            "wd": "e-mail"
                                        },
                                        {
                                            "wd": "telegraph"
                                        }
                                    ],
                                    [
                                        {
                                            "wd": "mail"
                                        },
                                        {
                                            "wd": "post"
                                        }
                                    ],
                                    [
                                        {
                                            "wd": "answer"
                                        },
                                        {
                                            "wd": "reply"
                                        }
                                    ]
                                ]
                            }
                        ]
                    ]
                ]
            }
        ],
        "shortdef": [
            "to compose and set down on paper the words of",
            "to engage in an exchange of written messages"
        ]
    },
    {
        "meta": {
            "id": "written",
            "uuid": "af9e4bdf-ecd5-49e8-8fd5-2a5afc5a4fb9",
            "src": "coll_thes",
            "section": "alpha",
            "stems": [
                "writ",
                "writ large",
                "writ small",
                "write",
                "write one's own ticket",
                "writes",
                "writing",
                "written",
                "wrote"
            ],
            "syns": [
                [
                    "authored",
                    "penned",
                    "scratched (out)",
                    "scribbled"
                ],
                [
                    "corresponded"
                ]
            ],
            "ants": [],
            "offensive": false
        },
        "hwi": {
            "hw": "written"
        },
        "vrs": [
            {
                "vl": "also",
                "va": "writ"
            },
            {
                "vl": "or dialectal",
                "va": "wrote"
            }
        ],
        "fl": "verb",
        "sls": [
            "past participle of {d_link|write|write}"
        ],
        "def": [
            {
                "sseq": [
                    [
                        [
                            "sense",
                            {
                                "sn": "1",
                                "dt": [
                                    [
                                        "text",
                                        "to compose and set down on paper the words of "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "a staunch supporter of the old school, he prefers to {it}write{/it} all of his letters by hand"
                                            }
                                        ]
                                    ]
                                ],
                                "syn_list": [
                                    [
                                        {
                                            "wd": "authored"
                                        },
                                        {
                                            "wd": "penned"
                                        },
                                        {
                                            "wd": "scratched (out)"
                                        },
                                        {
                                            "wd": "scribbled"
                                        }
                                    ]
                                ],
                                "rel_list": [
                                    [
                                        {
                                            "wd": "cast"
                                        },
                                        {
                                            "wd": "composed"
                                        },
                                        {
                                            "wd": "crafted"
                                        },
                                        {
                                            "wd": "drafted"
                                        },
                                        {
                                            "wd": "drawn up"
                                        },
                                        {
                                            "wd": "formulated"
                                        },
                                        {
                                            "wd": "framed"
                                        },
                                        {
                                            "wd": "prepared"
                                        }
                                    ],
                                    [
                                        {
                                            "wd": "recast"
                                        },
                                        {
                                            "wd": "redrafted"
                                        },
                                        {
                                            "wd": "revised"
                                        },
                                        {
                                            "wd": "rewritten"
                                        }
                                    ],
                                    [
                                        {
                                            "wd": "lettered"
                                        },
                                        {
                                            "wd": "printed"
                                        },
                                        {
                                            "wd": "typed"
                                        },
                                        {
                                            "wd": "typewritten"
                                        }
                                    ],
                                    [
                                        {
                                            "wd": "recorded"
                                        },
                                        {
                                            "wd": "taken down"
                                        },
                                        {
                                            "wd": "transcribed"
                                        }
                                    ],
                                    [
                                        {
                                            "wd": "autographed"
                                        },
                                        {
                                            "wd": "penciled (in)",
                                            "wvrs": [
                                                {
                                                    "wvl": "or",
                                                    "wva": "pencilled (in)"
                                                }
                                            ]
                                        },
                                        {
                                            "wd": "registered"
                                        },
                                        {
                                            "wd": "signed"
                                        }
                                    ],
                                    [
                                        {
                                            "wd": "couched"
                                        },
                                        {
                                            "wd": "expressed"
                                        },
                                        {
                                            "wd": "phrased"
                                        },
                                        {
                                            "wd": "put"
                                        },
                                        {
                                            "wd": "worded"
                                        }
                                    ]
                                ]
                            }
                        ]
                    ],
                    [
                        [
                            "sense",
                            {
                                "sn": "2",
                                "dt": [
                                    [
                                        "text",
                                        "to engage in an exchange of written messages "
                                    ],
                                    [
                                        "vis",
                                        [
                                            {
                                                "t": "promise you'll {it}write{/it} while you're away"
                                            }
                                        ]
                                    ]
                                ],
                                "syn_list": [
                                    [
                                        {
                                            "wd": "corresponded"
                                        }
                                    ]
                                ],
                                "rel_list": [
                                    [
                                        {
                                            "wd": "communicated"
                                        },
                                        {
                                            "wd": "intercommunicated"
                                        }
                                    ],
                                    [
                                        {
                                            "wd": "airmailed"
                                        },
                                        {
                                            "wd": "e-mailed"
                                        },
                                        {
                                            "wd": "telegraphed"
                                        }
                                    ],
                                    [
                                        {
                                            "wd": "mailed"
                                        },
                                        {
                                            "wd": "posted"
                                        }
                                    ],
                                    [
                                        {
                                            "wd": "answered"
                                        },
                                        {
                                            "wd": "replied"
                                        }
                                    ]
                                ]
                            }
                        ]
                    ]
                ]
            }
        ],
        "shortdef": [
            "to compose and set down on paper the words of",
            "to engage in an exchange of written messages"
        ]
    }
]
'
