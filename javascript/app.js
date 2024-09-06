function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar a marca ou modelo do veiculo</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let marca = ""; 
    let modelo = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        marca = dado.marca.toLowerCase()
        modelo = dado.modelo.toLowerCase()
        // se titulo includes campoPesquisa
        if (marca.includes(campoPesquisa) || modelo.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
                <div class="resultado">
                    <h2>${marca} ${modelo}</h2>
                    <p>Versão: ${dado.vercao}</p>
                    <p>Descrição: ${dado.descricao}</p>
                </div>
            `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}
