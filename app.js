const kelvin = 293

let celsius = kelvin - 273
let fahrenheit = celsius * (9 / 5) + 32

fahrenheit = Math.floor(fahrenheit)

function printTemperature(type) {
  let temperature

  if (type === 'fahrenheit') {
    temperature = fahrenheit
  }

  if (type === 'celsius') {
    temperature = celsius
  }

  console.log(`The temperature is ${temperature} degrees ${type}`)
}

printTemperature('celsius')
