document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.gymNav a');
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
        });
    });
    
document.querySelector('.hamburger').addEventListener('click', () => {
        document.querySelector('.gymNav').classList.toggle('active');
});