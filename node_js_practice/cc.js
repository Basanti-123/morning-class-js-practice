//2; //Write a nodejs application to convert the currency from one currency to
//another using package: currency-converter-lt

const CC = require("currency-converter-lt");
const currencyConverter = new CC();

// currencyConverter
//   .from("USD")
//   .to("NPR")
//   .amount(125)
//   .convert()
//   .then((response) => {
//     console.log({ from: "USD", to: "NPR", amount: 1000, response }); //or do something else
//   });

const moneyConverter = async () => {
  const answer = await currencyConverter
    .amount(100)
    .to("NPR")
    .from("USD")
    .convert();
  return answer; // promise
};

async function answer() {
  const reply = await moneyConverter();
  return reply; // value (promise resolve)
}

const returned = answer();
console.log({ returned });
