function initScrollSuave() {
    const links = document.querySelectorAll('.menuJs a'); // Seleciona todos os links do menu de navegação.
    function scrollParaSection(event) {
        event.preventDefault(); //Desliga o comportamento padrão dos links, ou seja, a navegação interna.
        const href = event.target.getAttribute('href'); // Pegando o href dos links, ids ligados as sections
        const section = document.querySelector(href); // Recebendo o href dos links
        section.scrollIntoView({ // Método para fazer o scroll suave na página, indo diretamente para a section passada no href.
            behavior: "smooth",
        });
    }

    links.forEach((link) => { // Cria a função com evento de click nos links.
        link.addEventListener('click', scrollParaSection);
    });
}
initScrollSuave();

function initContentShow() {
    function animationScroll(){
        const sections = document.querySelectorAll('.flex_conteiner') 
        sections.forEach((section) => { 
            const topSection = section.getBoundingClientRect().top - 300; 
            if(topSection <= 0){ 
                section.classList.add('animationSection')
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