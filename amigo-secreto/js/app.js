let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    if (amigo.value == '') {
        alert('Por favor insira algum nome!!');
        return;
    }

    if (amigos.includes(amigo.value)) {

        alert('Nome já adicionado, por favor insira outro!!');
        return;
    }

    let listaAmigos = document.getElementById('lista-amigos');
    amigos.push(amigo.value);

    if (listaAmigos.textContent == '') {
        listaAmigos.textContent = amigo.value;
    } else {
        listaAmigos.textContent = listaAmigos.textContent +  ', ' + amigo.value;
    }

    amigo.value = '';
   
}

function sortear() {
    if(amigos.length < 3) {
        alert('Adicione pelo menos 3 amigos!!');
        return;
    }
    embaralhar(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        
        if(i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
        }
        
     }

}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        [lista[indice - 1], lista[indiceAleatorio]] =
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    document.getElementById('nome-amigo').value = '';

    document.getElementById('lista-amigos').textContent = '';

    document.getElementById('lista-sorteio').textContent = '';
}