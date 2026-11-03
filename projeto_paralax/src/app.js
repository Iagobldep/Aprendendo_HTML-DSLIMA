const heroSection = document.querySelector('.hero-parallax');
const camadas = document.querySelectorAll('.camada');
const reducaoMovimento = window.matchMedia('(prefers-reduced-motion:reduce)').matches;
if (!reducaoMovimento) {
    let pensando = false;
    function atualizarParallax() {
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;
        const heroHeight = heroSection ? heroSection.offsetHeight : 0;
        if (scrollY <= heroHeight) {
            camadas.forEach((camada) => {
                const velocidade = parseFloat(camada.getAttribute('data-speed'))

                    || 0;

                const yOffset = -(scrollY * velocidade);
                camada.style.transform = `translate3d(0, ${yOffset}px, 0)`;
            });
        }
        pensando = false;
    }
    window.addEventListener('scroll', () => {
        if (!pensando) {
            window.requestAnimationFrame(atualizarParallax);
            pensando = true;
        }
    }, { passive: true });
}