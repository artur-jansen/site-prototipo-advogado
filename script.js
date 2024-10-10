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

const speed = 50;

function typeWriter(element, text) {
    let index = 0;
    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }
    type();
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target;
            const text = element.getAttribute('data-text');
            typeWriter(element, text);
            observer.unobserve(element); 
        }
    });
}, { threshold: 0.5 }); 

document.querySelectorAll('.texto').forEach(element => {
    observer.observe(element);
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