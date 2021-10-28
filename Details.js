// console.log(fullName)
let tableBody = document.getElementById("tableBody")
let number = document.getElementById("number");
let addrress = document.getElementById("address");
let city = document.getElementById("city");


let InputName = document.getElementById("inputName");
let InputPhone = document.getElementById("phoneNumber");
let InputType = document.getElementById("inputType");;
let InputAddress = document.getElementById("inputAddress");
let InputCity = document.getElementById("inputCity");
// console.log(InputName, InputPhone, InputAddress, InputCity, InputType)
let detailsBtn = document.getElementById("detailsBtn").addEventListener("click", function button(e) {
    console.log("success")

    InputName = document.addEventListener("input", function name() {

        tableBody.innerHTML = ` <th id="fullNAme" scope="col">${InputName.value}</th>`
    })
    InputAddress = document.addEventListener("input", function addrfess() {
        // console.log(InputAddress.value)
        tableBody.innerHTML = ` <th id="fullNAme" scope="col">${InputAddress.value}</th>`

    })
    InputPhone = document.addEventListener("input", function phone() {
        // console.log(InputPhone.value)
        tableBody.innerHTML = ` <th id="fullNAme" scope="col">${InputPhone.value}</th>`
    })
    InputType = document.addEventListener("input", function type() {
        // console.log(InputType.value)
        tableBody.innerHTML = ` <th id="fullNAme" scope="col">${InputType.value}</th>`
    })
    InputCity = document.addEventListener("input", function city() {
        // console.log(InputCity.value)
        tableBody.innerHTML = ` <th id="fullNAme" scope="col">${InputCity.value}</th>`


    })
    if (InputName == null) {
        alert("thank you so much")
    }

})