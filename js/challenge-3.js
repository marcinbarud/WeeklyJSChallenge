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

    const status            = Array.from(document.getElementsByName("status"))
    const lastModified      = document.getElementById("lastModified");

    const ls = localStorage;
    let delay;

    function delayEvent(){
        delay = setTimeout(saveItems,1000);
    }

    function clearEvent(){
        clearTimeout(delay);
    }



    function saveItems()
    {
        formElems.forEach(function(elem){
            ls.setItem(elem.id, elem.value);
            console.log(`Saved item: "${elem.id}" : "${elem.value}"`);
        });
        updateModifyTime();
    }

    function updateModifyTime()
    {
        ls.setItem("modifyTime", new Date());
    }

    function getLastModifiedTime()
    {
        return ls.getItem("modifyTime") || "Sorry, You never use this application :(";
    }

    formElems.forEach((elem)=>{
        elem.addEventListener("keyup", function(){
            delayEvent();
        });

        elem.addEventListener("keydown", function(){
            clearEvent()
        });
    });

    status.addEventListener("change", function(){
            clearEvent()
            delayEvent();
        });


    lastModified.innerText = "Last modified: " + getLastModifiedTime();
})();
