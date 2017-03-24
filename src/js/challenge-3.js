(function() {

    const formElems = [];
    const customerFirstName = document.getElementById("firstName");
    const customerSurname   = document.getElementById("surname");
    const customerStreet    = document.getElementById("street");
    const customerCity      = document.getElementById("city");
    const customerPostcode  = document.getElementById("postcode");
    const companyName       = document.getElementById("companyName");
    const companyStreet     = document.getElementById("companyStreet");
    const companyCity       = document.getElementById("companyCity");
    const companyPostcode   = document.getElementById("companyPostcode");
    const companyTaxNumber  = document.getElementById("companyTaxNumber");
    const price             = document.getElementById("price");
    
    const status            = Array.from(document.getElementsByName("status"))

    formElems.push(customerFirstName, customerSurname, customerStreet, customerCity, customerPostcode,
                    companyName, companyStreet, companyCity, companyPostcode, companyTaxNumber, 
                    price
    );

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
        let currentStatus = null;

        formElems.forEach(function(elem){
            ls.setItem(elem.id, elem.value);
            console.log(`Saved item: "${elem.id}" : "${elem.value}"`);
        });

        currentStatus = status.find((elem) => {
            return elem.checked === true;
            });

        ls.setItem("status", currentStatus.value);
        console.log(`Saved item: "status" : "${currentStatus.value}"`)

        ls.setItem("modifyTime", new Date());
    }

    function getLastModifiedTime()
    {
        return ls.getItem("modifyTime") || "Sorry, You never use this application ;)";
    }

    function initInputValues()
    {
        formElems.forEach((elem)=>{
            elem.value = ls.getItem(elem.id);
        });

        status.forEach((elem)=> {
            if (elem.value === ls.getItem("status")) {
                elem.checked = true;
            }
        });

        lastModified.innerText = "Last modified: " + getLastModifiedTime();
    }

    function bindEvents() {
        formElems.forEach((elem)=>{
            elem.addEventListener("keyup", function(){
                delayEvent();
            });

            elem.addEventListener("keydown", function(){
                clearEvent();
            });
        });

        status.forEach((elem)=>{
            elem.addEventListener("change", function(){
                clearEvent();
                delayEvent();
            });
        });
    }
       
    initInputValues();
    bindEvents();
})();
