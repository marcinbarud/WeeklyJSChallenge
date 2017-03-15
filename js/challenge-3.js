(function() {

    const formElems = [
        customerFirstName = document.getElementById("firstName"),
        customerSurname   = document.getElementById("surname"),
        customerStreet    = document.getElementById("street"),
        customerCity      = document.getElementById("city"),
        customerPostcode  = document.getElementById("postcode"),

        companyName       = document.getElementById("companyName"),
        companyStreet     = document.getElementById("companyStreet"),
        companyCity       = document.getElementById("companyCity"),
        companyPostcode   = document.getElementById("companyPostcode"),
        companyTaxNumber  = document.getElementById("companyTaxNumber"),

        price             = document.getElementById("price")
    ]

        status            = Array.from(document.getElementsByName("status"))

    const ls = localStorage;
    let delay;

    function delayEvent(elem){
        delay = setTimeout(saveItem.bind(this, elem),1000);
    }

    function clearEvent(){
        clearTimeout(delay);
    }



    function saveItem(input)
    {
        ls.setItem(input.id, input.value);
        console.log(`Saved item: "${input.id}" : "${input.value}"`);
        updateModifyTime();
    }

    function updateModifyTime()
    {
        ls.setItem("modifyTime", new Date());
    }

    //formElems[i].addEventListener("click", function(){});
    let elemsCount = formElems.length;
    /*for (let i=0;i<elemsCount;i++) {
        formElems[i].addEventListener("click", function(){});
    }*/

    formElems.forEach((elem)=>{
        elem.addEventListener("keyup", function(){
            delayEvent(elem);
        });

        elem.addEventListener("keydown", function(){
            clearEvent()
        });
    });



})();
