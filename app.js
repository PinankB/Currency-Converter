let baseURL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies"

let dropdowns = document.querySelectorAll(".dropdown select");
let btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select")
const msg = document.querySelector(".msg");
//querySelectorAll returns a NodeList (a collection of elements), not a single element. So btn is not a button, it’s a list of buttons — and a NodeList doesn’t have addEventListener, which is why you get:

// TypeError: btn.addEventListener is not a function
for(let select of dropdowns){
    //travelling in the key of the countrylist i
    for(let currCode in countryList){
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
     if(select.name === "from" && currCode === "USD" ){
        newOption.selected = true;
    } else if(select.name === "to" && currCode === "INR" ){
        newOption.selected = true;
    }
    select.append(newOption);
    }
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    })
}
const updateFlag = (element) =>{
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img"); //parent element because element is in select so img is in select-container which is its parent 
    img.src = newSrc;
} 

btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if(amtVal === "" || amtVal < 1){
        amtVal = 1;
        amount.value = "1";
    }
    const URL = `${baseURL}/${fromCurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
    let finalAmount = amtVal*rate;
    console.log(finalAmount);
    
    msg.innerHTML = `${amtVal} ${fromCurr.value.toUpperCase()} = ${finalAmount} ${toCurr.value.toUpperCase()}  `;
});