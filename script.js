const convertButton = document.querySelector("#converter")
const currencySelet = document.querySelector("#currency-select")

function convertValues() {

    const inputCurrencyValue = document.querySelector("#dindin").value 
    const valueToConvert = document.querySelector(".value-to-convert")
    const valueConverted = document.querySelector(".valueconverted")

    console.log(currencySelet.value)
    valueToConvert.innerHTML = new Intl.NumberFormat ("pt-BR",{style: "currency",
        currency: "BRL"}).format(inputCurrencyValue) 

    const dolarToday = 5.24
    const euroToday = 6.01
    const libraToday = 6.9
    const bitcoinToday = 350000


    const convertedValue = inputCurrencyValue / dolarToday

    if (currencySelet.value == "dolar") {
        
          valueConverted.innerHTML =  new Intl.NumberFormat ("en-US",{style: "currency",
        currency: "USD"}).format(convertedValue)

        }

    if (currencySelet.value == "euro") {
        
          valueConverted.innerHTML =  new Intl.NumberFormat ("de-DE",{style: "currency",
        currency: "EUR"}).format(inputCurrencyValue/euroToday)

        }

     if (currencySelet.value == "libra") {
        
          valueConverted.innerHTML =  new Intl.NumberFormat ("de-DE",{style: "currency",
        currency: "GBP"}).format(inputCurrencyValue/libraToday)

        }

     if (currencySelet.value == "bitcoin") {
        
          valueConverted.innerHTML =  new Intl.NumberFormat("en-US",{style: "currency",
        currency: "USD"}).format(inputCurrencyValue/bitcoinToday)

        }
    }

        function changeCurrency() {
                
           const currencyName = document.getElementById("currency-name")
           const currencyImage = document.getElementById("currency-image") 
           
            if (currencySelet.value == "dolar") {
                currencyName.innerHTML = "Dólar Americano"
                currencyImage.src = "./img/dolar.png"
            }

            if (currencySelet.value == "euro") {
                currencyName.innerHTML = "Euro"
                currencyImage.src = "./img/euro.png"
            }

            if (currencySelet.value == "libra") {
                currencyName.innerHTML = "Libra Esterlina"
                currencyImage.src = "./img/libra.png"
            }
            
            if (currencySelet.value == "bitcoin") {
                currencyName.innerHTML = "Bitcoin"
                currencyImage.src = "./img/bitcoin.png"
            } 
        
            convertValues()
        
        }

      

currencySelet.addEventListener("change", changeCurrency)
convertButton.addEventListener("click",convertValues )
    

const particles = document.querySelector('.particles');

for(let i = 0; i < 40; i++) {

    const span = document.createElement('span');

    span.style.left = Math.random() * 100 + 'vw';

    span.style.animationDuration =
        (Math.random() * 10 + 10) + 's';

    span.style.opacity = Math.random();

    particles.appendChild(span);

}