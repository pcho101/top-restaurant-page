const contact = () => {
    const main = document.createElement('main');
    const h1 = document.createElement('h1');
    h1.textContent = 'Contact Form';
    main.appendChild(h1);

    const form = document.createElement('form');
    main.appendChild(form);
    
    return main;
}

export {contact};