const form = document.getElementById('tempForm');
const resultadoDiv = document.getElementById('resultado');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const celsius = Number(document.getElementById('celsius').value);
    const fahrenheit = (celsius * 9/5) + 32;
    const kelvin = celsius + 273.15;
    resultadoDiv.innerHTML = `
        <h3>Resultados:</h3>
        <p>${celsius} °C equivalen a:</p>
        <p><strong>Fahrenheit:</strong> ${fahrenheit.toFixed(2)} °F</p>
        <p><strong>Kelvin:</strong> ${kelvin.toFixed(2)} K</p>
    `;
});