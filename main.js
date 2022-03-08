/* API para pegar todas as categorias */
let apiCategorias = new XMLHttpRequest;
apiCategorias.open('GET', 'https://api.chucknorris.io/jokes/categories');

apiCategorias.onreadystatechange = () => {
    if (apiCategorias.readyState == 4 && apiCategorias.status === 200) {
        let categorias = JSON.parse(apiCategorias.responseText)
        let select = document.createElement('select');
        select.className = 'form-select btn-outline-dark buttonChuckNorris selectFormat'
        select.id = 'selectId'
        let optionDefault = document.createElement('option');
        document.getElementById('select').appendChild(select);
        optionDefault.value = '#';
        optionDefault.className = 'text-center'
        optionDefault.innerHTML = '-- Categorias --';

        select.appendChild(optionDefault);


        for (let i = 0; i < categorias.length; i++) {
            let option = document.createElement('option');
            option.value = categorias[i];
            option.className = 'text-center';
            option.innerHTML = categorias[i];
            select.appendChild(option);
        }

        let button = document.createElement('button');
        button.type = 'button';
        button.className = 'btn btn-outline-dark buttonChuckNorris';
        button.innerHTML = 'Enviar';
        button.setAttribute('onclick', 'selectValue()'); /* Vamos pegar o valor do select */
        document.getElementById('select').append(button)
    }
}

apiCategorias.send(); /* Fim da API */


/* Pega o valor do select atraves do botão */
function selectValue() {
    let valor = document.getElementById('selectId').value; /* Valor do select */
    /* Enviar para a nova API */
    let api = new XMLHttpRequest;
    api.open('GET', `https://api.chucknorris.io/jokes/random?category=${valor}`);

    api.onreadystatechange = () => {
        if (api.readyState == 4 && api.status == 200) {
            let text = JSON.parse(api.responseText);
            document.getElementById('segundoTexto').className = 'textFormat text-dark bg-secondary bg-gradient bg-opacity-25 rounded py-2 px-2';
            document.getElementById('segundoTexto').innerHTML = `-"${text.value}"`
        }
    }

    api.send();
}


function searchValor() {
    /* Pegando o valor da pesquisa */
    let valor = document.getElementById('searchInputValue').value; 

    let api = new XMLHttpRequest;

    api.open('GET', `https://api.chucknorris.io/jokes/search?query=${valor}`);
    api.onreadystatechange = () => {
        if(api.readyState == 4 && api.status == 200) {
            let text = JSON.parse(api.responseText);
            console.log(text)
            console.log(text.result[0].value) /* text.result[0].value */

            for(let i = 0; i <= 5; i++) {
                if(text.result[i]) {
                    let p = document.createElement('p');
                    p.className = 'textFormat text-dark bg-secondary bg-gradient bg-opacity-25 rounded py-2 px-2';
                    p.innerHTML = `-"${text.result[i].value}"`;
                    document.getElementById('textosPesquisa').appendChild(p);

                    let divisor = document.createElement('div');
                    divisor.className = 'divisor';
                    document.getElementById('textosPesquisa').appendChild(divisor);
                }
            }
        }
    }
    api.send();

}

function apiFrasesRandom() {
    /* API para frases aleatórias */
    let api = new XMLHttpRequest;

    api.open('GET', 'https://api.chucknorris.io/jokes/random');

    api.onreadystatechange = () => {
        if (api.readyState == 4 && api.status == 200) {
            let text = JSON.parse(api.responseText);
            document.getElementById('primeiroTexto').className = 'textFormat text-dark bg-secondary bg-gradient bg-opacity-25 rounded py-2 px-2'
            $('p')[0].innerHTML = `-"${text.value}"`
        }
    }

    api.send(); /* Fim da API */
}
apiFrasesRandom();