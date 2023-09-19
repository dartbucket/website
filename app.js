const cards = document.querySelectorAll('.video-card');
const techCards = document.querySelectorAll('.tech-card');

techCards.forEach((card) => {
    card.addEventListener('click', createRipple);
});

cards.forEach((card) => {
    card.addEventListener('click', createRipple);
});


function createRipple(event) {
    const ripple = document.createElement('div');
    ripple.classList.add('ripple');
    const rect = event.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = event.clientX - rect.left - size / 2 + 'px';
    ripple.style.top = event.clientY - rect.top - size / 2 + 'px';
    event.currentTarget.appendChild(ripple);

    // Remove the ripple element after the animation
    ripple.addEventListener('animationend', () => {
        ripple.remove();
    });
}




