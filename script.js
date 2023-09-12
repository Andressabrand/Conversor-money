
const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueconverted = document.querySelector(".currency-value")


    console.log(currencySelect.value)
    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 7
    const bitcoinToday = 129.235




    if (currencySelect.value == "dolar") {
        currencyValueconverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"

        }).format(inputCurrencyValue / dolarToday
        )

    }


    if (currencySelect.value == "euro") {
        currencyValueconverted.innerHTML =
            new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"

            }).format(inputCurrencyValue / euroToday)

    }



    if (currencySelect.value == "libra") {
        currencyValueconverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)

}


if(currencySelect.value == "bitcoin"){
    currencyValueconverted.innerHTML = new Intl.NumberFormat("pt-BR",{
        style:"currency",
        currency:"BTC"

    }).format(inputCurrencyValue / bitcoinToday)
}



currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"

}).format(inputCurrencyValue)

}



function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")


    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dolar Americano"
        currencyImage.src = "./assets/estados-unidos.png.png"
    }



    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png.png"



    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "libra"
        currencyImage.src = "./assets/libra 1.png"
    }


if (currencySelect.value == "bitcoin"){
currencyName.innerHTML = "bitcoin"
currencyImage.src = "./assets/bitcoin 1.png"

}


}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)





