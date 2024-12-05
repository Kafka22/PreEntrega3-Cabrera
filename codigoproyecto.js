// Datos de escalas, acordes y progresiones
const escalasMayores = {
    Do: ["Do", "Re", "Mi", "Fa", "Sol", "La", "Si"],
    Re: ["Re", "Mi", "Fa#", "Sol", "La", "Si", "Do#"],
    Mi: ["Mi", "Fa#", "Sol#", "La", "Si", "Do#", "Re#"],
    Fa: ["Fa", "Sol", "La", "Si♭", "Do", "Re", "Mi"],
    Sol: ["Sol", "La", "Si", "Do", "Re", "Mi", "Fa#"],
    La: ["La", "Si", "Do#", "Re", "Mi", "Fa#", "Sol#"],
    Si: ["Si", "Do#", "Re#", "Mi", "Fa#", "Sol#", "La#"]
};

const acordesMayores = {
    Do: { nombre: "Do maj7", arpegio: ["Do", "Mi", "Sol", "Si"] },
    Re: { nombre: "Re m7", arpegio: ["Re", "Fa", "La", "Do"] },
    Mi: { nombre: "Mi m7", arpegio: ["Mi", "Sol", "Si", "Re"] },
    Fa: { nombre: "Fa maj7", arpegio: ["Fa", "La", "Do", "Mi"] },
    Sol: { nombre: "Sol 7", arpegio: ["Sol", "Si", "Re", "Fa"] },
    La: { nombre: "La m7", arpegio: ["La", "Do", "Mi", "Sol"] },
    Si: { nombre: "Si ø", arpegio: ["Si", "Re", "Fa", "La"] }
};

const progresionesMayores = {
    Do: ["Do maj7", "Re m7", "Mi m7", "Fa maj7", "Sol 7", "La m7", "Si ø"],
    Re: ["Re maj7", "Mi m7", "Fa#m7", "Sol maj7", "La 7", "Si m7", "Do# ø"],
    Mi: ["Mi maj7", "Fa#m7", "Sol#m7", "La maj7", "Si 7", "Do#m7", "Re# ø"],
    Fa: ["Fa maj7", "Sol m7", "La m7", "Si♭ maj7", "Do 7", "Re m7", "Mi ø"],
    Sol: ["Sol maj7", "La m7", "Si m7", "Do maj7", "Re 7", "Mi m7", "Fa# ø"],
    La: ["La maj7", "Si m7", "Do#m7", "Re maj7", "Mi 7", "Fa#m7", "Sol# ø"],
    Si: ["Si maj7", "Do#m7", "Re#m7", "Mi maj7", "Fa# 7", "Sol#m7", "La# ø"]
};

// Elementos del DOM
const notasDiv = document.getElementById("notas");
const resultadoDiv = document.getElementById("resultado");

// Al cargar la página, recupero la última selección guardada
document.addEventListener("DOMContentLoaded", () => {
    const ultimaOpcion = localStorage.getItem("ultimaOpcion");
    const ultimaNota = localStorage.getItem("ultimaNota");

    if (ultimaOpcion && ultimaNota) {
        mostrarResultado(ultimaNota, ultimaOpcion);
    }
});

document.getElementById("botonEscalas").addEventListener("click", () => {
    mostrarNotas("escala");
});

document.getElementById("botonAcordes").addEventListener("click", () => {
    mostrarNotas("acorde");
});

document.getElementById("botonProgresiones").addEventListener("click", () => {
    mostrarNotas("progresion");
});

// Función para mostrar las notas
function mostrarNotas(opcion) {
    notasDiv.innerHTML = "";

    Object.keys(escalasMayores).forEach(nota => {
        const botonNota = document.createElement("button");
        botonNota.textContent = nota;
        botonNota.addEventListener("click", () => {
            mostrarResultado(nota, opcion);

            localStorage.setItem("ultimaOpcion", opcion);
            localStorage.setItem("ultimaNota", nota);
        });
        notasDiv.appendChild(botonNota);
    });
}

// Función para mostrar el resultado según la opción elegida y la nota seleccionada
function mostrarResultado(nota, opcion) {
    resultadoDiv.innerHTML = ""; // Limpiar el resultado anterior

    if (opcion === "escala") {
        const escala = escalasMayores[nota];
        resultadoDiv.innerHTML = `<h3>Escala Mayor de ${nota}</h3><p>${escala.join(", ")}</p>`;
    } else if (opcion === "acorde") {
        const acorde = acordesMayores[nota];
        resultadoDiv.innerHTML = `<h3>Acorde de ${acorde.nombre}</h3><p>Arpegio: ${acorde.arpegio.join(", ")}</p>`;
    } else if (opcion === "progresion") {
        const progresion = progresionesMayores[nota];
        resultadoDiv.innerHTML = `<h3>Progresión Armónica de ${nota} Mayor</h3><p>${progresion.join(", ")}</p>`;
    }
}