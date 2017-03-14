(function() {

    const formElems = [
        customerFirstName = document.getElementsByName("firstName"),
        customerSurname   = document.getElementsByName("surname"),
        customerStreet    = document.getElementsByName("street"),
        customerCity      = document.getElementsByName("city"),
        customerPostcode  = document.getElementsByName("postcode"),

        companyName       = document.getElementsByName("name"),
        companyStreet     = document.getElementsByName("companyStreet"),
        companyCity       = document.getElementsByName("companyCity"),
        companyPostcode   = document.getElementsByName("companyPostcode"),
        companyTaxNumber  = document.getElementsByName("companyTaxNumber"),

        price             = document.getElementsByName("price")
    ]

    status            = document.getElementsByName("status");
    /*const radiob            = document.getElementsByName("status");
    const customerFirstName = document.getElementsByName("firstName");
    const customerSurname   = document.getElementsByName("surname");
    const customerStreet    = document.getElementsByName("street");
    const customerCity      = document.getElementsByName("city");
    const customerPostcode  = document.getElementsByName("postcode");

    const companyName       = document.getElementsByName("name");
    const companyStreet     = document.getElementsByName("companyStreet");
    const companyCity       = document.getElementsByName("companyCity");
    const companyPostcode   = document.getElementsByName("companyPostcode");
    const companyTaxNumber  = document.getElementsByName("companyTaxNumber");

    const price             = document.getElementsByName("price");
    const status            = document.getElementsByName("status");*/

    const ls = localStorage;

    function saveItem(input)
    {
        ls.setItem(input.name, input.value);
    }

    function updateModifyTime()
    {
        ls.setItem("modifyTime", new Date());
    }

    let elemsCount = formElems.length;
    /*for (let i=0;i<elemsCount;i++) {
        formElems[i].addEventListener('keyup', saveItem);
    }*/

console.dir(formElems);

})();
