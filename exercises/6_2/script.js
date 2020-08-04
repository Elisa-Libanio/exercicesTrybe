CreatOptionStates(['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'])


function CreatOptionStates(states) {



    const state = document.querySelector('#state');


}



function createListStates() {
    for (let index = 0; index < states.length; index += 1) {
        let option = document.createElement('option');

        option.innerHTML = states[index];
        state.appendChild(option);

    }

    // let dateVerify = () => {

    //     let date = document.querySelector("#date"),

    //         if (date > 0 & date <= 31 && date > 0 && date <= 12) {

    //             date === true;

    //         } else {

    //             console.log("Essa data é inválida");
    //         }

    // }


    //  Data de início - Texto

    // Verificar o formato da data dd/mm/aaaa.

    // O dia deve ser > 0 e <= 31.

    // O mês deve ser > 0 e <= 12.

    // O ano não pode ser negativo.

    // Caso alguma das condições for inválida no momento do envio do formulário, exibir mensagem de erro contextualizada.

    // Campo obrigatório -->