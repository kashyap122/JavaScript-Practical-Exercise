let countrySelect = document.getElementById("country");
let countryToChangeSelect = document.getElementById("countryToChange");
let numToChangeInput = document.getElementById("converting");
let convertButton = document.getElementById("convert");
let convertedOutput = document.getElementById("converted");
let conversionRate1=0;
let conversionRate2=0;
countrySelect.addEventListener("change", () => {
  // let selectedCountry = countrySelect.value;

  switch (countrySelect.value) {
    case "usa":
      conversionRate1 = 1;
      break;
    case "uk":
      conversionRate1 = 1.27; // Adjusted to a sample exchange rate
      break;
    case "japan":
      conversionRate1 = 0.007; // Adjusted to a sample exchange rate
      break;
    case "ind":
      conversionRate1 = 0.012; // Adjusted to a sample exchange rate
      break;
    default:
      conversionRate1 = "Invalid";
  }

  Array.from(countryToChangeSelect.options).forEach(option => {
    option.disabled = (option.value === countrySelect.value);
  });
});

countryToChangeSelect.addEventListener("change", () => {
  let selectedCountry = countryToChangeSelect.value;

  switch (countryToChangeSelect.value) {
    case "usa":
      conversionRate2 = 1;
      break;
    case "uk":
      conversionRate2 = 1.27; // Adjusted to a sample exchange rate
      break;
    case "japan":
      conversionRate2 = 0.007; // Adjusted to a sample exchange rate
      break;
    case "ind":
      conversionRate2 = 0.012; // Adjusted to a sample exchange rate
      break;
    default:
      conversionRate2 = "Invalid";
  }

  Array.from(countrySelect.options).forEach(option => {
    option.disabled = (option.value === countryToChangeSelect.value);
  });
});

convertButton.addEventListener("click", () => {
  // let conversionRate1;

  let numToChange = parseFloat(numToChangeInput.value);
  let convertedValue = (conversionRate1/conversionRate2)*numToChange;

  convertedOutput.innerHTML = `Converted value: ${convertedValue}`;
});
