//collegiate dictionary my API key: 876921fa-a003-43fe-bb42-c7b41d93a410
//collegiate thesaurus my API key: 7b7337a7-5b56-4fd4-ae81-be29b4054cf7


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

//checks against empty input, invalid (non-word) input
const inputHandler = (ajaxObj) =>{
        let selectedWord = "";

        //if JSON object is of correct structure
        if(typeof(ajaxObj[0][0]) === "object"){

            const arrSyns =(ajaxObj[0][0].meta.syns[0]);
            // console.log("arrSyns is: ");
            // console.log(arrSynsAdj1);

            // const randIndex = Math.floor(Math.random() * arrSynsAdj1.length);
            // console.log(`randIndex is: ${randIndex}`);
            selectedWord = randWordPicker(ajaxObj[0][0].meta.syns[0]);


        }
        else{
            console.log("invalid input for adj1! using default...");
            selectedWord = "aubergine";
        }
        console.log(`INSIDE inputHandler, selectedWord is: ${selectedWord}`)
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
        // $modal.hide();

        //waiting until AFTER ajax requests are been done for adj1, adj2, and noun1
        $.when(ajaxCaller($formAdj1), ajaxCaller($formAdj2), ajaxCaller($formNoun1)).done(function(a1, a2, n1){

            //reinitialize modal,
            $modal.empty();
            $modal.hide();

            // console.log("inside when function");
            console.log(a1);
            console.log(a2);
            console.log(n1);


            randAdj1 = inputHandler(a1);
            randAdj2 = inputHandler(a2);
            randNoun1 = inputHandler(n1);


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

            //add modal
            // let $modal = $(".modal");
            $bandName = $("<p>").text(`${randBandName}`).appendTo(".modal");
            let $modalClose = $(".modalClose").text("Close modal by clicking here").appendTo(".modal");

            $modal.show();



            //modal event listener
            $bandName.on("click", (event)=>{
                $modal.hide();
            });



            // $("form").on("submit", (event)=>{




        })


    })
})
