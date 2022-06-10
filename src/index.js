import {home} from './home';

const headerElement = () => {
    const header = document.createElement('header');
    const ul = document.createElement('ul');
    const liNames = ['Home', 'Menu', 'Contact'];
    header.appendChild(ul);
    for (let i = 0; i < liNames.length; i++) {
        const li = document.createElement('li');
        li.textContent = liNames[i];
        ul.appendChild(li);
    }
    return header;
};

const footerElement = () => {
    const footer = document.createElement('footer');
    const p = document.createElement('p');
    p.textContent = 'Copyright © 2022 Restaurant Name | pcho101';
    footer.appendChild(p);
    return footer;
}

const displayPage = (() => {
    const content = document.getElementById('content');
    content.appendChild(headerElement());
    content.appendChild(home());
    content.appendChild(footerElement());
})();