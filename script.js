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

const text = 'Sou Ricardo Almeida, advogado especializado em Direito Ambiental, e estou comprometido com soluções legais sustentáveis e eficazes. Agende uma consulta para saber mais.';
let index = 0;
const speed = 50;

function typeWriter() {
    if(index < text.length) {
        document.querySelector('.hero-paragrafo').innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();

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