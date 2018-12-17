enum typesOfTemperature {
  fahrenheit = "fahrenheit",
  celsius = "celsius"
}

const kelvin: number = 293;

let celsius: number = kelvin - 273;
let fahrenheit: number = celsius * (9 / 5) + 32;

fahrenheit = Math.floor(fahrenheit);

function printTemperature(type: typesOfTemperature): void {
  let temperature;

  if (type === "fahrenheit") {
    temperature = fahrenheit;
  }

  if (type === "celsius") {
    temperature = celsius;
  }

  console.log(`The temperature is ${temperature} degrees ${type}`);
}

printTemperature(typesOfTemperature.celsius);
