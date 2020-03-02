// The following line makes sure your styles are included in the project. Don't remove this.
import "../styles/main.scss";
import "regenerator-runtime/runtime";
import "bootstrap/scss/bootstrap.scss";
// Import any additional modules you want to include below \/

// \/ All of your javascript should go here \/

document.querySelector("button").addEventListener("click", e => {
  e.preventDefault();

  const selectedCurrencyValue = document.querySelector(".currency").children;
  const currencyValue = selectedCurrencyValue.selected.value;
  console.log(currencyValue);

  const cryptoInput = document.querySelector(".crypto-input");

  let toNumber = parseInt(cryptoInput.value);

  if (typeof toNumber === "number") {
    console.log(toNumber);
  } else {
    console.log("NaN!!!");
  }

  // fetch("https://api.cryptonator.com/api/ticker/btc-eur")
  //   .then(res => {
  //     return res.json();
  //   })
  //   .then(data => {
  //     console.log(data.ticker.price);
  //   });
});

// fetch("https://api.cryptonator.com/api/ticker/btc-usd")
//   .then(res => {
//     return res.json();
//   })
//   .then(data => {
//     console.log(data.ticker.price);
//   });
