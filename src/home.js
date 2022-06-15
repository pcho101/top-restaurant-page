const home = () => {
    const main = document.createElement('main');
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2');

    h1.textContent = 'Moon Jade Restaurant';
    h2.textContent = 'Traditional and Authentic Cuisine';
    h1.classList.add('restaurant-name');
    h2.classList.add('slogan');

    main.appendChild(h1);
    main.appendChild(h2);

    return main;
}

export {home};