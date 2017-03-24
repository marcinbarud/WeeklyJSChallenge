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

    function delaySaveEvent(){
        delay = setTimeout(saveDataToLocalStorage,1000);
    }

    function clearSaveEvent(){
        clearTimeout(delay);
    }



    function saveDataToLocalStorage()
    {
        let invoiceStatus = getStatusValue(status);
        formElems.forEach(function(elem){
            ls.setItem(elem.id, elem.value);
            console.log(`Saved item: "${elem.id}" : "${elem.value}"`);
        });
        ls.setItem("Invoice status", invoiceStatus);
        console.log(`Saved item: "Invoice status" : "${invoiceStatus}"`);
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


    function getStatusValue(){

        let invoiceStatus;
        status.forEach(function(elem){
            if (elem.checked == true) {
                invoiceStatus =  elem.value;
            }
        });

        return invoiceStatus;
    }




    formElems.forEach((elem)=>{
        elem.addEventListener("keyup", function(){
            delaySaveEvent();
        });

        elem.addEventListener("keydown", function(){
            clearSaveEvent()
        });
    });

    status.forEach((elem)=>{
        console.log(elem);
        elem.addEventListener("click", function(){
            console.log(getStatusValue());

            //clearSaveEvent()
            //delaySaveEvent();
        });
    });

    lastModified.innerText = "Last modified: " + getLastModifiedTime();



})();
