import { useState } from "react";

// Child Component: Input field for celsius and fahrenheit
function TemperatureInput({scale, temperature, onTemperatureChange}){
    const scaleNames = {
        c: 'Celsius',
        f: 'Fahrenheit'
    };

    return(
        <fieldset>
            <legend>Enter Temperature in {scaleNames[scale]}:</legend>
            <input 
            type="number"
            value={temperature}
            onChange={(e) => onTemperatureChange(e.target.value)}
            />
        </fieldset>
    );
}

// Helper functions to convert temperature
function toCelsius(f){
    return ((f-32)*5)/9;
}

function toFahrenheit(c){
    return (c*9)/5+32;
}

// Parent Component
function TemperatureConverter(){
    const [temperature, setTemperature] = useState('');
    const [scale, setScale] = useState('c');

    const handleCelsiusChange = (temp) => {
        setScale('c');
        setTemperature(temp);
    };
    const handleFahrenheitChange = (temp) => {
        setScale('f');
        setTemperature(temp);
    };

    const celsius = scale === 'f' ? toCelsius(temperature) : temperature;
    const fahrenheit = scale === 'c' ? toFahrenheit(temperature) : temperature;

    return(
        <div>
            <h2>Temperature converter</h2>
            <TemperatureInput 
            scale="c"
            temperature={celsius}
            onTemperatureChange={handleCelsiusChange}
            />
            <TemperatureInput 
            scale="f"
            temperature={fahrenheit}
            onTemperatureChange={handleFahrenheitChange}
            />
        </div>
    );
}

export default TemperatureConverter;