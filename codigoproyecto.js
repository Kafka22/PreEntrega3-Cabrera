// Cargar datos desde JSON usando fetch
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Guardar los datos en localStorage
        localStorage.setItem('datosMusicales', JSON.stringify(data));
        inicializarApp();
    })
    .catch(error => console.error("Error al cargar el archivo JSON:", error));

function inicializarApp() {
    const datosMusicales = JSON.parse(localStorage.getItem('datosMusicales'));

    // Función para mostrar botones de todas las notas
    function mostrarNotas(tipo) {
        const notasContainer = document.getElementById("notasContainer");
        notasContainer.innerHTML = ""; // Limpiar las notas anteriores
        const notas = Object.keys(datosMusicales[tipo]); // Obtener todas las notas del tipo seleccionado
        for (const nota of notas) {
            const btn = document.createElement("button");
            btn.textContent = nota;
            btn.onclick = () => mostrarResultado(tipo, nota);
            notasContainer.appendChild(btn);
        }
    }

    // Función para mostrar el resultado según el tipo
    function mostrarResultado(tipo, nota) {
        const resultado = document.getElementById("resultado");
        if (tipo === "escalas") {
            resultado.textContent = `Escala de ${nota}: ${datosMusicales.escalas[nota].join(", ")}`;
        } else if (tipo === "acordes") {
            resultado.textContent = `Acordes de ${nota}: ${datosMusicales.acordes[nota]}`;
        } else if (tipo === "progresiones") {
            resultado.textContent = `Progresión armónica de ${nota}: ${datosMusicales.progresiones[nota].join(", ")}`;
        }

        // Mostrar alerta con SweetAlert
        Swal.fire({
            title: `${tipo.charAt(0).toUpperCase() + tipo.slice(1)} de ${nota}`,
            text: resultado.textContent,
            icon: "info"
        });
    }

    // Event Listeners para botones
    document.getElementById("escalasBtn").addEventListener("click", () => mostrarNotas("escalas"));
    document.getElementById("acordesBtn").addEventListener("click", () => mostrarNotas("acordes"));
    document.getElementById("progresionesBtn").addEventListener("click", () => mostrarNotas("progresiones"));
}
