# Band Name Generator

Netlify Webpage: <https://hungry-easley-599ee0.netlify.app/>


## Website Description:

Band Name Generator, as the name implies, allows the user to randomly generate a band name.

The website prompts the user to enter text in 3 fields, prompting for two adjectives and one noun. The form also includes two optional checkboxes, one to prepend the band name with "The", and the other to pluralize the last word (noun).


## Technologies Used:

In order to randomly generate these words, the [Merriam-Webster API](https://dictionaryapi.com/products/api-collegiate-thesaurus) is used. Request calls to the API take the user input as the search term, and if there is a match, returns a JSON object that, among other things, includes a list of synonyms. From there, the website randomly selects a synonym using Javascript's Math.Random method.

In addition, a Youtube video player is embedded in the response modal (from a preselected list of videos).

## Notes, Challenges:

Merriam-Webster's APIs come with one glaring limitation: the API only allows for a ***single*** and ***explicit*** search term, i.e., a word of some kind *must* be included. As a result, my initial plan of randomly selecting *any adjective* or *any noun* was not possible. The textbox forms were necessarily used in order make any kind of request call to the API.



In addition, input handling by the API manifests in three distinct ways:

1. Valid input (an actual word that has and/or the thesaurus has a record of synonyms)
2. Invalid input- when search term is gibberish (not a word at all, e.g. xzyylix)
3. Invalid input- is not a word, but appears similar to one (e.g. asdf)


Each case produces a differently structured JSON object, and so in order to prevent accessing a non-existent element, a `typeof()` check was included at one level above the desired *syns* object:

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
    {
        // ...more random objects here
    }
]'


In short, to access the "syns" (synonyms) key, indexing would follow the following format:

`data[0].meta.syns[0][index]`
