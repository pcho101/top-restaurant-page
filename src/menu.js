const menu = () => {
    const main = document.createElement('main');
    const h1 = document.createElement('h1');
    h1.textContent = 'Menu';
    main.appendChild(h1);

    const h2Names = ['Main Dishes', 'Sides', 'Dessert'];
    for (let i = 0; i < h2Names.length; i++) {
        const h2 = document.createElement('h2');
        h2.textContent = h2Names[i];
        main.appendChild(h2);
    }
    return main;
}

export {menu};