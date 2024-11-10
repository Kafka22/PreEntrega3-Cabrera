            var modos = document.getElementById ("modos");
            modos.addEventListener ("click", modosAleatorios)
            var tonalidad = document.getElementById ("tonalidad");
            tonalidad.addEventListener ("click", tonalidadAleatoria)
            var intervalos = document.getElementById ("intervalos");
            intervalos.addEventListener ("click", intervalosAleatorios);
            
            var usuario_nota = parseInt(prompt("De que nota deseas saber el intervalo?\nElige un número\n"+
                        "1.Do \n2.Do sostenido/Re bemol \n3.Re \n4.Re sostenido/Mi bemol \n"+
                        "5.Mi/Fa bemol \n6.Mi sostenido/Fa \n7.Fa sostenido/Sol bemol \n8.Sol \n"+
                        "9.Sol sostenido/La bemol \n"+
                        "10.La \n11.La sostenido/Si bemol \n12.Si/Do bemol"));
            var usuario_intervalo = parseInt(prompt("Que intervalo deseas saber?\nElige un número\n"+
            "1.segunda menor\n2.segunda mayor\n3.tercera menor\n4.tercera mayor\n5.cuarta justa\n"+
            "6.cuarta aumentada/quinta disminuida\n7.quinta justa\n8.sexta menor\n9.sexta mayor\n"+
            "10.septima menor\n11.septima mayor"));
            
            var nombre_nota;
            if (usuario_nota ==1)
            {
                nombre_nota="Do"
            }
            else if (usuario_nota==2)
            {
                nombre_nota="Do sostenido/Re bemol"
            }
            else if (usuario_nota==3)
            {
                nombre_nota="Re"
            }
            else if (usuario_nota==4)
            {
                nombre_nota="Re sostenido/Mi bemol"
            }
            else if (usuario_nota==5)
            {
                nombre_nota="Mi/Fa bemol"
            }
            else if (usuario_nota==6)
            {
                nombre_nota="Mi sostenido/Fa"
            }
            else if (usuario_nota==7)
            {
                nombre_nota="Fa sostenido/Sol bemol"
            }
            else if (usuario_nota==8)
            {
                nombre_nota="Sol"
            }
            else if (usuario_nota==9)
            {
                nombre_nota="Sol sostenido/La bemol"
            }
            else if (usuario_nota==10)
            {
                nombre_nota="La"
            }
            else if (usuario_nota==11)
            {
                nombre_nota="La sostenido/Si bemol"
            }
            else if (usuario_nota==12)
            {
                nombre_nota="Si/Do bemol"
            }


            var nombre_intervalo;
            if (usuario_intervalo ==1)
            {
                nombre_intervalo="Segunda menor"
            }
            else if (usuario_intervalo==2)
            {
                nombre_intervalo="Segunda mayor"
            }
            else if (usuario_intervalo==3)
            {
                nombre_intervalo="Tercera menor"
            }
            else if (usuario_intervalo==4)
            {
                nombre_intervalo="Tercera mayor"
            }
            else if (usuario_intervalo==5)
            {
                nombre_intervalo="Cuarta Justa"
            }
            else if (usuario_intervalo==6)
            {
                nombre_intervalo="Cuarta Aumentada/Quinta Disminuida"
            }
            else if (usuario_intervalo==7)
            {
                nombre_intervalo="Quinta justa"
            }
            else if (usuario_intervalo==8)
            {
                nombre_intervalo="Sexta menor"
            }
            else if (usuario_intervalo==9)
            {
                nombre_intervalo="Sexta mayor"
            }
            else if (usuario_intervalo==10)
            {
                nombre_intervalo="Septima menor"
            }
            else if (usuario_intervalo==11)
            {
                nombre_intervalo="Septima mayor"
            }
            var nombre_resultado;
            var resultado= usuario_nota + usuario_intervalo;
            if (resultado ==2){nombre_resultado="Do sostenido/Re bemol"}
            else if (resultado == 3) {nombre_resultado="Re"}
            else if (resultado == 4) {nombre_resultado="Re sostenido/Mi bemol"}
            else if (resultado == 5) {nombre_resultado="Mi/Fa bemol"}
            else if (resultado == 6) {nombre_resultado="Mi sostenido/ Fa"}
            else if (resultado == 7) {nombre_resultado="Fa sostenido/Sol bemol"}
            else if (resultado == 8) {nombre_resultado="Sol"}
            else if (resultado == 9) {nombre_resultado="Sol sostenido/La bemol"}
            else if (resultado == 10) {nombre_resultado="La"}
            else if (resultado == 11) {nombre_resultado="La sostenido/Si bemol"}
            else if (resultado == 12) {nombre_resultado="Si/ Do bemol"}
            else if (resultado == 13) {nombre_resultado="Do"}
            else if (resultado == 14) {nombre_resultado="Do sostenido/Re bemol"}
            else if (resultado == 15) {nombre_resultado="Re"}
            else if (resultado == 16) {nombre_resultado="Re sostenido/Mi bemol"}
            else if (resultado == 17) {nombre_resultado="Mi/Fa bemol"}
            else if (resultado == 18) {nombre_resultado="Mi sostenido/ Fa"}
            else if (resultado == 19) {nombre_resultado="Fa sostenido/Sol bemol"}
            else if (resultado == 20) {nombre_resultado="Sol"}
            else if (resultado == 21) {nombre_resultado="Sol sostenido/La bemol"}
            else if (resultado == 22) {nombre_resultado="La"}
            else if (resultado == 23) {nombre_resultado="La sostenido/Si bemol"}
        document.write ("<p class=botoneco> La "+ nombre_intervalo + " de " + nombre_nota + " es </p> <p class=botoneco><strong>" + nombre_resultado + "</strong></p>");
       
        function tonalidadAleatoria ()
        {
        var resultadoTonal;
        resultadoTonal = Math.floor (Math.random() * (23 - 2 + 1)) + 2;
        if (resultadoTonal ==2){nombre_resultado="Do sostenido/Re bemol"; sonidos.innerHTML += '<audio src= "./sonidos/droneDosostenido.mp3" autoplay></audio>'}
            else if (resultadoTonal == 3) {nombre_resultadoTonal="Re"; sonidos.innerHTML += '<audio src= "./sonidos/droneRe.mp3" autoplay></audio>'}
            else if (resultadoTonal == 4) {nombre_resultadoTonal="Re sostenido/Mi bemol"; sonidos.innerHTML += '<audio src= "./sonidos/droneResostenido.mp3" autoplay></audio>'}
            else if (resultadoTonal == 5) {nombre_resultadoTonal="Mi/Fa bemol"; sonidos.innerHTML += '<audio src= "./sonidos/droneMi.mp3" autoplay></audio>'}
            else if (resultadoTonal == 6) {nombre_resultadoTonal="Mi sostenido/ Fa"; sonidos.innerHTML += '<audio src= "./sonidos/droneFa.mp3" autoplay></audio>'}
            else if (resultadoTonal == 7) {nombre_resultadoTonal="Fa sostenido/Sol bemol"; sonidos.innerHTML += '<audio src= "./sonidos/droneFasostenido.mp3" autoplay></audio>'}
            else if (resultadoTonal == 8) {nombre_resultadoTonal="Sol"; sonidos.innerHTML += '<audio src= "./sonidos/droneSol.mp3" autoplay></audio>'}
            else if (resultadoTonal == 9) {nombre_resultadoTonal="Sol sostenido/La bemol"; sonidos.innerHTML += '<audio src= "./sonidos/droneSolsostenido.mp3" autoplay></audio>'}
            else if (resultadoTonal == 10) {nombre_resultadoTonal="La"; sonidos.innerHTML += '<audio src= "./sonidos/droneLa.mp3" autoplay></audio>'}
            else if (resultadoTonal == 11) {nombre_resultadoTonal="La sostenido/Si bemol"; sonidos.innerHTML += '<audio src= "./sonidos/droneLasostenido.mp3" autoplay></audio>'}
            else if (resultadoTonal == 12) {nombre_resultadoTonal="Si/ Do bemol"; sonidos.innerHTML += '<audio src= "./sonidos/droneSi.mp3" autoplay></audio>'}
            else if (resultadoTonal == 13) {nombre_resultadoTonal="Do"; sonidos.innerHTML += '<audio src= "./sonidos/droneDo.mp3" autoplay></audio>'}
            else if (resultadoTonal == 14) {nombre_resultadoTonal="Do sostenido/Re bemol"; sonidos.innerHTML += '<audio src= "./sonidos/droneDosostenido.mp3" autoplay></audio>'}
            else if (resultadoTonal == 15) {nombre_resultadoTonal="Re"; sonidos.innerHTML += '<audio src= "./sonidos/droneRe.mp3" autoplay></audio>'}
            else if (resultadoTonal == 16) {nombre_resultadoTonal="Re sostenido/Mi bemol"; sonidos.innerHTML += '<audio src= "./sonidos/droneResostenido.mp3" autoplay></audio>'}
            else if (resultadoTonal == 17) {nombre_resultadoTonal="Mi/Fa bemol"; sonidos.innerHTML += '<audio src= "./sonidos/droneMi.mp3" autoplay></audio>'}
            else if (resultadoTonal == 18) {nombre_resultadoTonal="Mi sostenido/ Fa"; sonidos.innerHTML += '<audio src= "./sonidos/droneFa.mp3" autoplay></audio>'}
            else if (resultadoTonal == 19) {nombre_resultadoTonal="Fa sostenido/Sol bemol"; sonidos.innerHTML += '<audio src= "./sonidos/droneFasostenido.mp3" autoplay></audio>'}
            else if (resultadoTonal == 20) {nombre_resultadoTonal="Sol"; sonidos.innerHTML += '<audio src= "./sonidos/droneSol.mp3" autoplay></audio>'}
            else if (resultadoTonal == 21) {nombre_resultadoTonal="Sol sostenido/La bemol"; sonidos.innerHTML += '<audio src= "./sonidos/droneSolsostenido.mp3" autoplay></audio>'}
            else if (resultadoTonal == 22) {nombre_resultadoTonal="La"; sonidos.innerHTML += '<audio src= "./sonidos/droneLa.mp3" autoplay></audio>'}
            else if (resultadoTonal == 23) {nombre_resultadoTonal="La sostenido/Si bemol"; sonidos.innerHTML += '<audio src= "./sonidos/droneLasostenido.mp3" autoplay></audio>'}
            resultado.innerHTML += nombre_resultadoTonal + "</br>";
        
        }
        function modosAleatorios()
        {
            var resultadoModal;
            resultadoModal = Math.floor (Math.random() * (10 - 2 + 1)) + 2;
            if (resultadoModal ==2){nombre_resultadoModal="Lidio"}
                else if (resultadoModal == 3) {nombre_resultadoModal="Jónico"}
                else if (resultadoModal == 4) {nombre_resultadoModal="Mixolidio"}
                else if (resultadoModal == 5) {nombre_resultadoModal="Mixolidio b9#9b13"}
                else if (resultadoModal == 6) {nombre_resultadoModal="Mixolidio #11"}
                else if (resultadoModal == 7) {nombre_resultadoModal="Dórico"}
                else if (resultadoModal == 8) {nombre_resultadoModal="Eólico"}
                else if (resultadoModal == 9) {nombre_resultadoModal="Frigio"}
                else if (resultadoModal == 10) {nombre_resultadoModal="Locrio"}
                resultado_Modal.innerHTML += nombre_resultadoModal + "</br>";
        }

        function intervalosAleatorios()
        {
            var resultadoIntervalico;
            resultadoIntervalico = Math.floor (Math.random() * (7 - 2 + 1)) + 2;
            if (resultadoIntervalico ==2){nombre_resultadoIntervalico="Segundas"}
                else if (resultadoIntervalico == 3) {nombre_resultadoIntervalico="Terceras"}
                else if (resultadoIntervalico == 4) {nombre_resultadoIntervalico="Cuartas"}
                else if (resultadoIntervalico == 5) {nombre_resultadoIntervalico="Quintas"}
                else if (resultadoIntervalico == 6) {nombre_resultadoIntervalico="Sextas"}
                else if (resultadoIntervalico == 7) {nombre_resultadoIntervalico="Séptimas"}
                resultado_Intervalico.innerHTML += nombre_resultadoIntervalico + "</br>";
        }
        
        var resultado_Modal = document.getElementById ("resultadoModal");
        var resultado = document.getElementById("resultado");
        const sonidos = document.getElementById("sonidos");
        var resultado_Intervalico = document.getElementById ("resultadoIntervalico");