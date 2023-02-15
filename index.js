const form = document.getElementById('form');
let linhas = '';
const contato = [];
const tell = [];

form.addEventListener('submit', function (e) {
    e.preventDefault();
    adicionalinha();
    atualizalinha();

});
function validacontato() {



}
function adicionalinha() {
    const inputNome = document.getElementById('nome');
    const inputTelefone = document.getElementById('telefone');

    if (contato.includes(inputNome.value)) {
    alert(`o contato ${inputNome.value} ja foi inserido`);


    }
    if(tell.includes(inputTelefone.value)){


        alert(`telefone ${inputTelefone.value} ja foi inserido`);
        
    }

    
    
    
    else{
        contato.push(inputNome.value);
        tell.push(inputTelefone.value);
    
    
    
        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
    
        linha += '</tr>';
        linhas += linha;
         

    }


    inputNome.value = '';
    inputTelefone.value = '';



}
function atualizalinha() {
    const corpotable = document.querySelector('tbody');
    corpotable.innerHTML = linhas;

}


