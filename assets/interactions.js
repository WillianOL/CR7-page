function initScrollSuave() {
    const links = document.querySelectorAll('.menuJs a'); 
    function scrollParaSection(event) {
        event.preventDefault(); 
        const href = event.target.getAttribute('href'); 
        const section = document.querySelector(href); 
        section.scrollIntoView({ 
            behavior: "smooth",
        });
    }

    links.forEach((link) => { 
        link.addEventListener('click', scrollParaSection);
    });
}
initScrollSuave();

function initContentShow() {
    function animationScroll(){
        const sections = document.querySelectorAll('.flex_conteiner') // Seleciona todas as sections da página.
        sections.forEach((section) => { // Método forEach
            const topSection = section.getBoundingClientRect().top - 300; // Pega o topo da section selecionada com -300 para aparecer antes.
            if(topSection <= 0){ // Quando essa altura for <= a 0, adiciona a classe para aparecer o conteúdo da section.(animado com CSS)
                section.classList.add('animationSection');
            }
        })
    }
    
    window.addEventListener('scroll', animationScroll) // Função com evento de scroll em toda a página.
}
initContentShow();

function iniMenuMobile() {
    const btnMobile = document.querySelector('.mobileBtn'); // Seleciona o botão do menu mobile.
    function abrirMenuMobile() {
        const menu = document.querySelector('.navegationBtns');
        menu.classList.toggle('ativo'); // Adiciona a classe caso tenha, remove caso não tenha
    }
    
    btnMobile.addEventListener('click', abrirMenuMobile) // Função com evento de click do menu mobile.
}
iniMenuMobile();