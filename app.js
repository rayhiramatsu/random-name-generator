//collegiate dictionary my API key: 876921fa-a003-43fe-bb42-c7b41d93a410
//collegiate thesaurus my API key: 7b7337a7-5b56-4fd4-ae81-be29b4054cf7
// console.log("hello world");

// $(()=>{
//     $h1 = $("<h1>").text("asah world").appendTo("body");
// })


const randWordPicker = (arrWords) =>{
    return arrWords[Math.floor(Math.random() * arrWords.length)]



    // const randIndex = Math.floor(Math.random() * arrSyns.length);
    // console.log(`randIndex is: ${randIndex}`);
    // //
    // console.log(`random word from arr is ${arrSynsAdj1[randIndex]}`);
}

// Pulls AJAX request to API, returns string for adjective1
const ajaxCaller = ($form) =>{

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


const ajaxCaller2 = ($form) =>{

        //AJAX request for adjective1
        return $.ajax({
            url: `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${$form}?key=7b7337a7-5b56-4fd4-ae81-be29b4054cf7`
        })
}

//checks against empty input, invalid (non-word) input
const inputHandler = (ajaxObj) =>{
        let selectedWord = "";

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

}

$(()=>{
    // let $h1 = $("<h1>").text("asah world").appendTo("body");


    // $.ajax({}).then();

    $("form").on("submit", (event)=>{
        event.preventDefault();
        console.log("button was clicked");

        // form variables
        const $checkboxStatus = $(".chkbox").is(":checked");
        const $formAdj1 = $(".adjective1").val();
        const $formAdj2 = $(".adjective2").val();
        const $formNoun1 = $(".noun1").val();

        const $bandName = "";

        console.log(`checkbox status is: ${$checkboxStatus}`);
        console.log($formAdj1);
        console.log($formAdj2);
        console.log($formNoun1);
        console.log("//////");

        // words to be generated
        let randAdj1 = "";
        let randAdj2 = "";
        let randNoun1 = "";
        let randBandName = "";






        //AJAX request for adjective1
        // $.ajax({
        //     url: `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${$adj1}?key=7b7337a7-5b56-4fd4-ae81-be29b4054cf7`
        // }).then(
        //     (data)=>{
        //         console.log("data is: ");
        //         console.log(data);
        //
        //         console.log(typeof(data));
        //         console.log(`type of thing returned is: ${typeof(data[0])}`);
        //
        //         const blah = typeof(data[0])
        //
        //         // console.log(`first string in syns is: ${data[0].meta.syns[0][0]}`);
        //         console.log("TEST FIRE!");
        //
        //         // const arrSynsAdj1 = data[0].meta.syns[0];
        //         // console.log("arrSyns is: ");
        //         // console.log(arrSynsAdj1);
        //
        //
        //
        //         // const randIndex = Math.floor(Math.random() * arrSynsAdj1.length);
        //         // console.log(`randIndex is: ${randIndex}`);
        //         //
        //         // console.log(`random word from arr is ${arrSynsAdj1[randIndex]}`);
        //
        //
        //         if(typeof(data[0]) === "object"){
        //
        //             const arrSyns = data[0].meta.syns[0];
        //             // console.log("arrSyns is: ");
        //             // console.log(arrSynsAdj1);
        //
        //             // const randIndex = Math.floor(Math.random() * arrSynsAdj1.length);
        //             // console.log(`randIndex is: ${randIndex}`);
        //             randAdj1 = randWordPicker(data[0].meta.syns[0]);
        //
        //
        //         }
        //         else{
        //             console.log("invalid input for adj1! using default...");
        //             randAdj1 = "big";
        //         }
        //
        //
        //         console.log("After first ajax request, band name is:")
        //         console.log(randAdj1);
        //
        //
        //     }
        // )




        // randAdj1 = ajaxCaller($formAdj1);
        // console.log(`OUTSIDE ajax request, randAdj1 is : ${randAdj1}`);
        //
        // randAdj2 = ajaxCaller($formAdj2);
        // console.log(`OUTSIDE ajax request, randAdj2 is : ${randAdj2}`);
        //
        // randNoun1 = ajaxCaller($formNoun1);
        // console.log(`OUTSIDE ajax request, randNoun1 is : ${randNoun1}`);


        let $modal = $(".modal");
        // $modal.hide();

        //waiting until AFTER ajax requests are been done for adj1, adj2, and noun1
        $.when(ajaxCaller2($formAdj1), ajaxCaller2($formAdj2), ajaxCaller2($formNoun1)).done(function(a1, a2, n1){

            $modal.empty();
            $modal.hide();

            // console.log("inside when function");
            // console.log(a1);
            // // console.log(a2);
            // // console.log(n1);
            //
            // // console.log(typeof(a1[0]));
            // console.log(a1[0]);
            // console.log(typeof(a1[0][0]));

            randAdj1 = inputHandler(a1);
            // console.log(`randAdj1, after ajax, after input handler, inside when is: ${randAdj1}`);
            // console.log(a1[0][0].meta.syns[0][0]);
            randAdj2 = inputHandler(a2);
            randNoun1 = inputHandler(n1);


            //create band name string
            randBandName = `${randAdj1} ${randAdj2} ${randNoun1}`;

            //adding "The"
            if($checkboxStatus){
                randBandName = `The ${randBandName}`;
            }
            console.log(`new band name is: ${randBandName}`);



            //edit modal
            // let $modal = $(".modal");
            let $bandName = $("<h3>").text(`new band name is: ${randBandName}`).appendTo(".modal");
            $modal.show()







        })


    })
})
