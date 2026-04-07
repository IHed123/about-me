
    const image = document.querySelector('.roommessy');
    const title = document.querySelector('.title');
    
if (image && title) {
    image.addEventListener('mouseenter', () => {
        title.style.opacity = '0';
    });
    
    image.addEventListener('mouseleave', () => {
        title.style.opacity = '1';
    });
}

// Navbar active link highlighting
const currentPath = window.location.pathname;
if (currentPath === '/' || currentPath === '/index.html') {
    const homeLink = document.getElementById('nav-home');
    if (homeLink) homeLink.classList.add('active');
} else if (currentPath === '/about/index.html') {
    const aboutLink = document.getElementById('nav-about');
    if (aboutLink) aboutLink.classList.add('active');
} else if (currentPath === '/portfolio/index.html') {
    const portfolioLink = document.getElementById('nav-portfolio');
    if (portfolioLink) portfolioLink.classList.add('active');
} else if (currentPath === '/shop/index.html') {
    const shopLink = document.getElementById('nav-shop');
    if (shopLink) shopLink.classList.add('active');
} else if (currentPath === '/contact/index.html') {
    const contactLink = document.getElementById('nav-contact');
    if (contactLink) contactLink.classList.add('active');
}
