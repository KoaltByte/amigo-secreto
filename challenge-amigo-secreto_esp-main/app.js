let amigos = [];

        function agregarAmigo() {
            const input = document.getElementById('amigo');
            const nombre = input.value.trim();
            if (nombre !== "") {
                amigos.push(nombre);
                actualizarListaAmigos();
                input.value = "";
            } else {
                alert("Por favor, ingresa un nombre válido.");
            }
        }

        function actualizarListaAmigos() {
            const lista = document.getElementById('listaAmigos');
            lista.innerHTML = "";
            amigos.forEach((amigo, index) => {
                const li = document.createElement('li');
                li.textContent = `${index + 1}. ${amigo}`;
                lista.appendChild(li);
            });
        }
        function sortearAmigo() {
            if (amigos.length === 0) {
                alert("No hay amigos registrados para realizar el sorteo.");
                return;
            }

            const resultado = document.getElementById('resultado');
            resultado.innerHTML = "";

            const indexGanador = Math.floor(Math.random() * amigos.length);
            const ganador = amigos[indexGanador];

            const li = document.createElement('li');
            li.textContent = `El ganador es: ${ganador}`;
            resultado.appendChild(li);
        }