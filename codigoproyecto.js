// Capturamos la elección del usuario (escala, acorde o progresión) e Inicio el sistema
let opcionUsuario = parseInt(prompt("¿Qué te gustaría consultar?\n1. Escala basada en la progresión de Do mayor\n2. Acordes relacionados con la progresión de Do mayor\n3. Progresión armónica (grados I, IV, V) en Do mayor"));


if (opcionUsuario < 1 || opcionUsuario > 3) {
    alert("Por favor, ingresa una opción válida (1, 2 o 3).");
} else {

    // 2. Definir las notas de la escala
    const escalaDo = ["Do", "Re", "Mi", "Fa", "Sol", "La", "Si"];
    
    // Capturar la nota base del usuario
    let notaBase = parseInt(prompt("Elige la nota base:\n0. Do\n1. Re\n2. Mi\n3. Fa\n4. Sol\n5. La\n6. Si"));

    if (notaBase < 0 || notaBase > 6) {
        alert("Por favor, ingresa un número válido entre 0 y 6.");
    } else {
        // Función de orden superior para aplicar intervalos
        function aplicarIntervalo(nota, intervalo) {
            return (nota + intervalo) % 7; //lo aprendí de la IA, y se refiere a cómo manejar las notas musicales en un ciclo, ya que en la música occidental las notas se repiten en octavas. Aunque una nota Do de una octava diferente vibra en una frecuencia distinta a la de la primera octava, seguimos llamándola "Do" porque mantiene su nombre en cada ciclo. Si lo hubiera hecho de la manera matemáticama mas simple que manejo, yo hubiera tenido que definir cada Do como una nota completamente distinta en cada octava, creando múltiples versiones de la misma nota. Para este caso no hubiesen sido infinitas, pero me hubiese vuelto loco haciendo varias, lo mismo que me paso en la anterior version de este proyecto, en la primer entrega, tuve que hacer dos octavas para todas las notas asi se podrian resolver las distancias entre intervalos. Sin embargo, en la nomenclatura musical, no nos importa tanto la frecuencia exacta para los cálculos teóricos; lo que importa es que las notas se ven como un ciclo repetitivo. Usando esta fórmula modular % 7, que repito me ayudo la IA despues de horas de tratar de hacerle entender lo que queria lograr. Hice que la suma de las notas vuelva al principio cuando alcanzamos el final de la escala, repitiendo así la misma nota (como "Do") después de completar el ciclo de las siete notas (Do, Re, Mi, Fa, Sol, La, Si). 
        }

        //Clase para acordes
        class Acorde {
            constructor(tonica) {
                this.tonica = tonica;
                this.tercera = aplicarIntervalo(tonica, 2); // Tercera mayor
                this.quinta = aplicarIntervalo(tonica, 4);  // Quinta justa
            }

            // Método para mostrar las notas del acorde
            mostrarAcorde() {
                return `Acorde: ${escalaDo[this.tonica]}, ${escalaDo[this.tercera]}, ${escalaDo[this.quinta]}`;
            }
        }

        // Función para construir la escala
        function construirEscala(tonica) {
            let inicio = escalaDo.slice(tonica);
            let final = escalaDo.slice(0, tonica);
            return inicio.concat(final); // Unir ambas partes
        }

        // Función para construir una progresión armónica I-IV-V
        function construirProgresion(tonica) {
            let acordeI = new Acorde(tonica);
            let acordeIV = new Acorde(aplicarIntervalo(tonica, 3));
            let acordeV = new Acorde(aplicarIntervalo(tonica, 4));
            return [acordeI, acordeIV, acordeV];
        }

        //Dependiendo de lo que el usuario elija, mostramos la información correspondiente
        switch (opcionUsuario) {
            case 1: // Mostrar Escala
                let escala = construirEscala(notaBase);
                alert(`La escala de ${escalaDo[notaBase]} es: ${escala.join(", ")}`);
                break;

            case 2: // Mostrar Acorde
                let acorde = new Acorde(notaBase);
                alert(acorde.mostrarAcorde());
                break;

            case 3: // Mostrar Progresión armónica
                let progresion = construirProgresion(notaBase);
                let progresionTexto = progresion.map(acorde => acorde.mostrarAcorde()).join("\n");
                alert(`Progresión armónica I-IV-V de ${escalaDo[notaBase]}:\n${progresionTexto}`);
                break;

            default:
                alert("Opción no válida.");
        }
    }
}