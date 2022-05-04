const btnMobile = document.getElementById('button-mobile'); // Acesso a ID do button.

function toggleMenu() { // Função pra receber
    const nav = document.getElementById('nav'); // Acesso a ID do menu
    nav.classList.toggle('active') // Ativar ou desativar
    const backhme = document.getElementById('right-home');
    backhme.classList.toggle('active') // Ativar ou desativar
}
console.log(btnMobile)

btnMobile.addEventListener('click', toggleMenu) // Buscar evento do click