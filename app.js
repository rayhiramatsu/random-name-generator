//collegiate dictionary my API key: 876921fa-a003-43fe-bb42-c7b41d93a410
//collegiate thesaurus my API key: 7b7337a7-5b56-4fd4-ae81-be29b4054cf7
console.log("hello world");

// $(()=>{
//     $h1 = $("<h1>").text("asah world").appendTo("body");
// })

$(()=>{
    let $h1 = $("<h1>").text("asah world").appendTo("body");


    // $.ajax({}).then();

    $("form").on("submit", (event)=>{
        event.preventDefault();
        console.log("button was clicked");

        // $checkboxStatus = 3;
        $checkboxStatus = $(".chkbox").is(":checked");
        $adj1 = $(".adjective1").val();
        $adj2 = $(".adjective2").val();
        $noun1 = $(".noun1").val();

        console.log($checkboxStatus);
        console.log($adj1);
        console.log($adj2);
        console.log($noun1);


        //AJAX request for adjective1
        $.ajax({
            url: `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${$adj1}?key=7b7337a7-5b56-4fd4-ae81-be29b4054cf7`
        }).then(
            (data)=>{
                console.log("data is: ");
                console.log(data);

                console.log(typeof(data));
                console.log(`type of thing returned is: ${typeof(data[0])}`);

                // const arrSynsAdj1 = data[0].meta.syns[0];
                // console.log("arrSyns is: ");
                // console.log(arrSynsAdj1);



                // const randIndex = Math.floor(Math.random() * arrSynsAdj1.length);
                // console.log(`randIndex is: ${randIndex}`);
                //
                // console.log(`random word from arr is ${arrSynsAdj1[randIndex]}`);
            }
        )


        // console.log(arrSynsAdj1);







    })
})
