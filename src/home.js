const home = () => {
    const main = document.createElement('main');
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2');
    h1.textContent = 'Restaurant Name';
    h2.textContent = 'Restaurant Slogan';
    main.appendChild(h1);
    main.appendChild(h2);
    return main;
}

export {home};