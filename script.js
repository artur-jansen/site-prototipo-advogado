const duvidaInput = document.querySelector('#duvidas-input');
const duvidaCards = document.querySelectorAll('.duvidas-cards');

const topoBtn = document.querySelector('.botao-topo');
window.addEventListener('scroll', function () {

    if (window.scrollY > 50) {
        topoBtn.classList.add('scrolled');
    } else {
        topoBtn.classList.remove('scrolled');
    }
});

duvidaInput.addEventListener('input', function() {
    const filter = duvidaInput.value.toLowerCase();
    duvidaCards.forEach(card => {
        const duvidaCard = card.getAttribute('data-post').toLowerCase();
        if(duvidaCard.includes(filter)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
})

function typeWriter(element, text) {
    let index = 0;
    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 50); // Velocidade de 50 para dispositivos móveis
        }
    }
    type();
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.texto').forEach(element => {
        const text = element.getAttribute('data-text');

        // Aplica efeito de digitação apenas em dispositivos móveis
        if (window.innerWidth <= 768) {
            typeWriter(element, text); // Efeito de digitação para mobile
        } else {
            element.innerHTML = text; // Texto aparece diretamente em PCs
        }
    });
});

const botaoSaibaMaisDuvidas = document.querySelectorAll('.btnSaibaMaisDuvidas');
const whatsAppBtn = document.querySelector('.botao-whatsapp');

botaoSaibaMaisDuvidas.forEach(button => {
    button.addEventListener('click', function () {
        if (topoBtn) topoBtn.style.display = 'none';
        if (whatsAppBtn) whatsAppBtn.style.display = 'none';
    });
});

const modals = document.querySelectorAll('.modal');

modals.forEach(modal => {
    modal.addEventListener('hidden.bs.modal', function() {
        if (topoBtn) topoBtn.style.display = 'flex';
        if (whatsAppBtn) whatsAppBtn.style.display = 'flex';
    });
});

function toggleActive(element) {
    element.classList.toggle('active');
}

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})