// TÍTULO DIGITANDO
const texto = "💵 Blocos Econômicos";
let i = 0;

function digitar() {
    if (i < texto.length) {
        document.getElementById("titulo").innerHTML += texto[i];
        i++;
        setTimeout(digitar, 80);
    }
}
digitar();

// DINHEIRO CAINDO
const symbols = ["💸","💵","💰"];

setInterval(() => {
    const span = document.createElement("span");
    span.innerText = symbols[Math.floor(Math.random()*symbols.length)];
    
    span.style.position = "fixed";
    span.style.top = "-20px";
    span.style.left = Math.random() * window.innerWidth + "px";
    span.style.fontSize = "20px";

    document.body.appendChild(span);

    let pos = 0;
    const fall = setInterval(() => {
        pos += 3;
        span.style.top = pos + "px";
        
        if(pos > window.innerHeight){
            clearInterval(fall);
            span.remove();
        }
    }, 20);
}, 800);

// FADE AO ROLAR
const elements = document.querySelectorAll('.hidden');

window.addEventListener('scroll', () => {
    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if(top < window.innerHeight - 50){
            el.classList.add('show');
        }
    });
});

// BARRA DE PROGRESSO
window.onscroll = () => {
    let winScroll = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("progress").style.width = scrolled + "%";
};
