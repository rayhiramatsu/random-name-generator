//Ajax request for adjective2
$.ajax({
    //collegiate dictionary my API key: 876921fa-a003-43fe-bb42-c7b41d93a410
    //collegiate thesaurus my API key: 7b7337a7-5b56-4fd4-ae81-be29b4054cf7

    url: `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${$adj2}?key=7b7337a7-5b56-4fd4-ae81-be29b4054cf7`

    //search collegiate dictionary for "voluminous" as headword
    // url: "https://www.dictionaryapi.com/api/v3/references/collegiate/json/voluminous?key=876921fa-a003-43fe-bb42-c7b41d93a410"

    // url: "https://www.dictionaryapi.com/api/v3/references/collegiate/json/asdf?key=876921fa-a003-43fe-bb42-c7b41d93a410"

    //search collegiate thesaurus for "voluminous" as headword
    // url: "https://www.dictionaryapi.com/api/v3/references/thesaurus/json/cucumber?key=7b7337a7-5b56-4fd4-ae81-be29b4054cf7"

    //url: "https://www.dictionaryapi.com/api/v3/references/thesaurus/json/plain?key=7b7337a7-5b56-4fd4-ae81-be29b4054cf7"


    // url: "https://www.dictionaryapi.com/api/v3/references/thesaurus/json/cucumber?key=7b7337a7-5b56-4fd4-ae81-be29b4054cf7"


}).then(
    (data) =>{
        console.log(data);

        let $h2Adj1 = data[0].meta.syns;
        console.log($h2Adj1);


        // console.log(data[0]);
        // console.log(data[0].fl);
        //
        // let $h2 = $("<h2>").text(`word is: ${data[0].meta.id}`);
        // $h2.appendTo("body");
        //
        // $h2 = $("<h2>").text(`word type is: ${data[0].fl}`);
        // $h2.appendTo("body");
        //
        // //print short definitions
        //
        // for(let i = 0; i < data[0].shortdef.length; i++){
        //     let $p = $("<p>").text(`short def is: ${data[0].shortdef[i]}`);
        //     $p.appendTo("body");
        // }
        // $h2 = $("<h2>").text(`short def is: ${data[0].fl}`);
        // $h2.appendTo("body");

    }
);

//AJAX request for noun1
$.ajax({
    url: `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${$noun1}?key=7b7337a7-5b56-4fd4-ae81-be29b4054cf7`
}).then(
    (data)=>{
        console.log(data);
        const arrSynsAdj1 = data[0].meta.syns;
        console.log(arrSynsAdj1);
    }
)
})























// $.when(ajaxCaller($formAdj1), ajaxCaller($formAdj2), ajaxCaller($formNoun1)).done(function(a1, a2, n1){
//     let name = `name is: ${a1} ${a2} ${n1}`;
//     console.log(name);
// })


// $.when(adj1AjaxCaller($formAdj1)).done({
//     console.log("after $.when, randAdj1 is");
//
//     console.log(randAdj1);
// });

// $.when( { testing: 123 } ).done(function( x ) {
//     alert( x.testing ); // Alerts "123"
// });


// $.when(ajax)
// console.log("After first ajax request, band name is:")
// console.log(randAdj1);


// console.log(arrSynsAdj1);



@media (min-width: 640px){
    /* li:nth-child(1){
        clear:left;
    }
    li:nth-child(2){
        clear: left;
    } */
    .first3btn:nth-child(3){
        clear: left;
    }
}





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




$.ajax({
    url: `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${$formNoun1}?key=7b7337a7-5b56-4fd4-ae81-be29b4054cf7`
})
