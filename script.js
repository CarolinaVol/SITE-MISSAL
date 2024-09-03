// (1) Constante para armazenar a curiosidade
const curiosity = "O nome “Missal” foi escolhido em homenagem ao livro litúrgico utilizado nas celebrações religiosas.";

// (2) Função para mostrar a curiosidade ao usuário
function showCuriosity() {
    const messageElement = document.getElementById('message');
    
    // (3) Condicional para verificar se a curiosidade já foi mostrada
    if (messageElement.innerHTML === curiosity) {
        messageElement.innerHTML = "Você já viu esta curiosidade!";
    } else {
        messageElement.innerHTML = curiosity;
    }
}