
    function coletarcep() {
        let cep = document.querySelector("#cep").value;
        console.log(cep);
        dados(cep);
    };
     async function dados(cep) {  
        let dados = await fetch(`https://viacep.com.br/ws/${cep}/json/`).then(response => response.json()  ) ;     
        console.log(dados);
        dadostela(dados);
       };
     
       function dadostela(dados) {
    document.querySelector("#ender").value = dados.logradouro;
    document.querySelector("#bai").value = dados.bairro;
    document.querySelector("#city").value = dados.localidade;
    document.querySelector("#es").value = dados.estado;
    document.querySelector("#re").value = dados.regiao;
}

function limpatela(){
        document.querySelector("#cep").value = "";
        document.querySelector("#ender").value = "";
        document.querySelector("#bai").value = "";
        document.querySelector("#city").value = "";
        document.querySelector("#es").value = "";
        document.querySelector("#re").value = "";
        
}
