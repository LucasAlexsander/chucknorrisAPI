let apiCategorias = new XMLHttpRequest;
apiCategorias.open ('GET', 'https://api.chucknorris.io/jokes/categories');

apiCategorias.onreadystatechange = () => {
    if(apiCategorias.readyState == 4 && apiCategorias.status === 200) {
        let categorias = JSON.parse(apiCategorias.responseText)
        console.log(categorias.length)
        let select = document.createElement('select');
        select.id = 'selectId'
        let optionDefault = document.createElement('option');
        document.getElementById('select').appendChild(select);
        optionDefault.value = '#';
        optionDefault.innerHTML = '-- Escolha uma categoria --';
        
        select.appendChild(optionDefault);

        
        for(let i = 0; i < categorias.length; i++) {
            console.log(categorias[i])
            let option = document.createElement('option');
            option.value = categorias[i];
            option.innerHTML = categorias[i];
            select.appendChild(option);
        }
    }
}

apiCategorias.send();




/* 



let api = new XMLHttpRequest;

api.open('GET', 'https://api.chucknorris.io/jokes/random');

api.onreadystatechange = () => {
    if(api.readyState == 4 && api.status == 200) {
        let text = JSON.parse(api.responseText);
        console.log(text.value);
        $('p')[0].innerHTML = text.value
    }
}

api.send();
 */