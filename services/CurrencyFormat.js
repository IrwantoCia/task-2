const CurrencyFormat = (num, prefix, withPrefix = true) => {
  let numberFormatted = prefix + " " + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  if (!withPrefix) {
    numberFormatted = num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  return numberFormatted.replace(/,/g, ".");
};

export default CurrencyFormat;
