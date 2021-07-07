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
