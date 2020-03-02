// The following line makes sure your styles are included in the project. Don't remove this.
import "../styles/main.scss";
import "regenerator-runtime/runtime";
import "bootstrap/scss/bootstrap.scss";
// Import any additional modules you want to include below \/

// \/ All of your javascript should go here \/

document.querySelector("button").addEventListener("click", e => {
  e.preventDefault();

  const cryptoOptionList = document.getElementById("crypto");
  const cryptoSelectedItem = cryptoOptionList.selectedOptions;
  console.log(cryptoSelectedItem[0].dataset.crypto);
  const cryptoChoice = cryptoSelectedItem[0].dataset.crypto;

  const currencyOptionList = document.getElementById("currency");
  const currencySelectedItem = currencyOptionList.selectedOptions;
  console.log(currencySelectedItem[0].dataset.currency);
  const currencyChoice = currencySelectedItem[0].dataset.currency;

  fetch(
    `https://api.cryptonator.com/api/ticker/${cryptoChoice}-${currencyChoice}`
  )
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data.ticker.price);

      const cryptoInput = document.querySelector(".crypto-input");
      const toNumber = parseInt(cryptoInput.value);
      const currencyOutput = document.querySelector(".currency-output");
      if (isNaN(toNumber)) {
        console.error("NaN!!!");
      } else {
        console.log(toNumber * data.ticker.price);

        currencyOutput.value = toNumber * data.ticker.price;
        // toNumber * data.ticker.price
      }
    });
});
