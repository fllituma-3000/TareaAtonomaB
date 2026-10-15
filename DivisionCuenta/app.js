const form = document.getElementById('cuentaForm');
const resultadoDiv = document.getElementById('resultado');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const subtotal = parseFloat(document.getElementById('subtotal').value);
    const porcentajePropina = parseFloat(document.getElementById('propinaPorcentaje').value);
    const numPersonas = parseInt(document.getElementById('personas').value);
    const valorPropina = (subtotal * porcentajePropina) / 100;
    const totalConPropina = subtotal + valorPropina;
    const pagoPorPersona = totalConPropina / numPersonas;
    resultadoDiv.innerHTML = `
        <h3>Resumen de la Cuenta:</h3>
        <p>Subtotal de la cuenta: $${subtotal.toFixed(2)}</p>
        <p>Propina (${porcentajePropina}%): $${valorPropina.toFixed(2)}</p>
        <p><strong>Total con propina:</strong> $${totalConPropina.toFixed(2)}</p>
        <hr>
        <p><strong>Número de personas:</strong> ${numPersonas}</p>
        <p><strong>Paga cada uno:</strong> $${pagoPorPersona.toFixed(2)}</p>
    `;
});