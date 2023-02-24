function initScrollSuave() {
    const links = document.querySelectorAll('.menuJs a')
    console.log(links);

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
    })
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
    
    window.addEventListener('scroll', animationScroll)
}
initContentShow();