function convertTemperature() {
    const temperatureInput = document.getElementById("temperature");
    const fromUnitInput = document.getElementById("from-unit");
    const toUnitInput = document.getElementById("to-unit");
    const resultOutput = document.getElementById("result");
    
    const temperature = parseFloat(temperatureInput.value);
    const fromUnit = fromUnitInput.value;
    const toUnit = toUnitInput.value;
    
    let convertedTemperature = 0;
    
    if (fromUnit === "celsius") {
      if (toUnit === "fahrenheit") {
        convertedTemperature = temperature * 9/5 + 32;
      } else if (toUnit === "kelvin") {
        convertedTemperature = temperature + 273.15;
      }
    }
    
    resultOutput.innerHTML = `${temperature} ${fromUnit} = ${convertedTemperature.toFixed(2)} ${toUnit}`;
  }
  
