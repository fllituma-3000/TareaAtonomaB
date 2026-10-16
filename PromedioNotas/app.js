
const form = document.getElementById('promedioForm');
const resultadoDiv = document.getElementById('resultado');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const nota1 = Number(document.getElementById('nota1').value);
    const nota2 = Number(document.getElementById('nota2').value);
    const nota3 = Number(document.getElementById('nota3').value);
    const suma = nota1 + nota2 + nota3;
    const promedio = suma / 3;
    let estado = promedio >= 7 ? "Aprobado" : "Reprobado";
    resultadoDiv.innerHTML = `
        <h3>Resultado del Promedio:</h3>
        <p>Nota 1: ${nota1}</p>
        <p>Nota 2: ${nota2}</p>
        <p>Nota 3: ${nota3}</p>
        <hr>
        <p><strong>Promedio final:</strong> ${promedio.toFixed(2)}</p>
        <p><strong>Estado:</strong> ${estado}</p>
    `;
});