//collegiate dictionary my API key: 876921fa-a003-43fe-bb42-c7b41d93a410
//collegiate thesaurus my API key: 7b7337a7-5b56-4fd4-ae81-be29b4054cf7


// returns randomly selected element in array
const randWordPicker = (arrWords) =>{
    return arrWords[Math.floor(Math.random() * arrWords.length)]



    // const randIndex = Math.floor(Math.random() * arrSyns.length);
    // console.log(`randIndex is: ${randIndex}`);
    // //
    // console.log(`random word from arr is ${arrSynsAdj1[randIndex]}`);
}

// Pulls AJAX request to API, returns string for adjective1
const ajaxCaller2 = ($form) =>{

    //AJAX request for adjective1
    $.ajax({
        url: `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${$form}?key=7b7337a7-5b56-4fd4-ae81-be29b4054cf7`
    }).then(
        (data)=>{
            // console.log("data is: ");
            // console.log(data);
            //
            // console.log(typeof(data));
            // console.log(`type of thing returned is: ${typeof(data[0])}`);
            //
            // const blah = typeof(data[0])
            //
            // console.log("TEST FIRE!");

            let selectedWord = "";

            if(typeof(data[0]) === "object"){

                const arrSyns = data[0].meta.syns[0];
                // console.log("arrSyns is: ");
                // console.log(arrSynsAdj1);

                // const randIndex = Math.floor(Math.random() * arrSynsAdj1.length);
                // console.log(`randIndex is: ${randIndex}`);
                selectedWord = randWordPicker(data[0].meta.syns[0]);


            }
            else{
                console.log("invalid input for adj1! using default...");
                selectedWord = "aubergine";
            }
            console.log(`INSIDE ajax request, selectedWord is: ${selectedWord}`)
            return selectedWord;
        }
    )
}


const ajaxCaller = ($form) =>{
    return $.ajax({
        url: `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${$form}?key=7b7337a7-5b56-4fd4-ae81-be29b4054cf7`
    })
}


//returns a random word (adjective or noun) from hardcoded array
//called when invalid JSON object is returned from API, used in inputHandler
const wordReturner = (wordType) =>{
    const hardCodedAdjs = ["cinnabar", "brown", "chocolate", "dormant", "cantankerous",
                           "slappin'", "aubergine", "aubergine"

                          ];

    const hardCodedNouns = ["bird", "shoe", "bottle", "stan", "gamer", "aubergine",
                            "aubergine", "aubergine"

                           ];
    if(wordType === "adj"){
        return randWordPicker(hardCodedAdjs);
    }
    else if(wordType === "noun"){
        return randWordPicker(hardCodedNouns);
    }
    else{
        console.log("You should never be here. Invalid arg passed in.");
    }
}

//checks against empty input, invalid (non-word) input
//if invalid JSON object, checks against wordType "adj", or "noun", calls wordReturner
const inputHandler = (ajaxObj, wordType) =>{
        let selectedWord = "";

        //if JSON object is of correct structure
        if(typeof(ajaxObj[0][0]) === "object"){
            const arrSyns =(ajaxObj[0][0].meta.syns[0]);
            // console.log("arrSyns is: ");
            // console.log(arrSynsAdj1);
            selectedWord = randWordPicker(ajaxObj[0][0].meta.syns[0]);
        }
        else{
            console.log("invalid input for adj1! using default...");
            selectedWord = wordReturner(wordType);
        }
        console.log(`INSIDE inputHandler, selectedWord is: ${selectedWord}`)


        //capitalize first char in word
        selectedWord = selectedWord.charAt(0).toUpperCase() + selectedWord.slice(1);
        console.log(`After capitalization, word is: ${selectedWord}`);

        return selectedWord;
}


const addModal = (strBandName) =>{
    let $bandName = $("<p>").text(`strBandName`).appendTo(".modal");
    $modal.show()

    $bandName.on("click", (event)=>{
        $modal.hide();
    });
}

$(()=>{
    $("form").on("submit", (event)=>{
        console.log("button was clicked");
        event.preventDefault();


        // form variables
        const $checkboxThe = $(".chkbox").is(":checked");
        const $formAdj1 = $(".adjective1").val();
        const $formAdj2 = $(".adjective2").val();
        const $formNoun1 = $(".noun1").val();
        const $checkboxPlural = $(".chkbox-plural").is(":checked");



        console.log(`chkbox status is: ${$checkboxThe}`);
        console.log(`form adj1 val is: ${$formAdj1}`);
        console.log(`form adj2 val is: ${$formAdj2}`);
        console.log(`form noun1 val is: ${$formNoun1}`);
        console.log(`chkbox-plural status is: ${$checkboxThe}`);
        console.log("//////");

        // words to be generated
        let randAdj1 = "";
        let randAdj2 = "";
        let randNoun1 = "";
        let randBandName = "";

        // jquery bandname element
        let $bandName = "";

        //init modal var
        let $modal = $(".modal");
        $modal.hide();

        //waiting until AFTER ajax requests are been done for adj1, adj2, and noun1
        $.when(ajaxCaller($formAdj1), ajaxCaller($formAdj2), ajaxCaller($formNoun1)).done(function(a1, a2, n1){
            //reinitialize modal,
            $modal.empty();
            // $bandName = "";
            // $modal.hide();

            // console.log("inside when function");
            console.log(a1);
            console.log(a2);
            console.log(n1);

            // examine JSON object for validity,
            // i.e., did API return an object with the "synonyms" array?
            randAdj1 = inputHandler(a1, "adj");
            randAdj2 = inputHandler(a2, "adj");
            randNoun1 = inputHandler(n1, "noun");

            //upper case

            //create band name string
            randBandName += `${randAdj1} ${randAdj2} ${randNoun1}`;

            //adding "The"
            if($checkboxThe){
                randBandName = `The ${randBandName}`;
                console.log(`band name, after "The": ${randBandName}`);
            }


            //pluralize noun
            if($checkboxPlural){
                //do something here to pluralize noun.

                //super basic pluralizer, add 'S'
                randBandName = `${randBandName}s`;
                console.log(`band name, after pluralize: ${randBandName}`);
            }

            console.log(`band name, final: ${randBandName}`);


            //add modal, event listeners
            // addModal(randBandName);



            //////////////////////////
            // Setting up the modal //
            //////////////////////////


            //add band name text
            $bandName = $("<p>").text(`${randBandName}`).addClass("modalBandName").appendTo(".modal");

            //add embedded youtube video

            const youtubeLinks = [
                "https://www.youtube.com/embed/QZShA_a-5r8",
                "https://www.youtube.com/embed/qSZUaCNX_ZA",
                "https://www.youtube.com/embed/DSZx2lM5tHY",
                "https://www.youtube.com/embed/0jXXWBt5URw",
                "https://www.youtube.com/embed/tF4xpKobado",
                "https://www.youtube.com/embed/a70dbulRjx0",
                "https://www.youtube.com/embed/dXMqlSIQemQ",
                "https://www.youtube.com/embed/ye9xzzYsA6Y",
                "https://www.youtube.com/embed/uCK7Gok3u0U"
            ];

            $youtube = $("<iframe>").attr({
                width: "448",
                height: "252",
                src: `${randWordPicker(youtubeLinks)}`,
                title: "YouTube video player",
                frameborder: "0",
                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                allowfullscreen:true
            });

            $youtube.appendTo(".modal");










            //add modal close button
            let $modalClose = $("<button>").text("Close").addClass("modalClose").appendTo(".modal");
            // let $blah = $("<p>").text("blahblahblah").appendTo(".modal");

            $modal.show();



            //event listener, closing modal window
            $modalClose.on("click", (event)=>{
                $modal.hide();



                //clearing form input
                $(".chkbox").prop("checked", false);
                $(".adjective1").val("");
                $(".adjective2").val("");
                $(".noun1").val("");
                $(".chkbox-plural").prop("checked", false);

            });
        })
    })
})
