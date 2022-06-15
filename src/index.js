import './style.css';
import {home} from './home';
import {menu} from './menu';
import {contact} from './contact';

const headerItems = ['Home', 'Menu', 'Contact'];

const headerElement = () => {
    const header = document.createElement('header');
    const ul = document.createElement('ul');
    
    for (let i = 0; i < headerItems.length; i++) {
        const li = document.createElement('li');
        li.textContent = headerItems[i];
        li.classList.add(headerItems[i].toLowerCase());
        if (i == 0) {
            li.classList.add('active');
        }
        li.addEventListener('click', switchTabs);
        ul.appendChild(li);
    }
    header.appendChild(ul);

    return header;
};

const footerElement = () => {
    const footer = document.createElement('footer');
    const p = document.createElement('p');
    const a = document.createElement('a');

    p.textContent = 'Copyright © 2022 | ';
    a.textContent = 'pcho101';
    a.href = 'https://github.com/pcho101/top-restaurant-page';
    
    p.appendChild(a)
    footer.appendChild(p);

    return footer;
}

const switchTabs = (e) => {
    const content = document.getElementById('content');
    if (!e.target.classList.contains('active')) {
        setActive(e.target);
        if (e.target.textContent == headerItems[0]) {
            content.replaceChild(home(), content.children[1]);
        }
        else if (e.target.textContent == headerItems[1]) {
            content.replaceChild(menu(), content.children[1]);
        }
        else if (e.target.textContent == headerItems[2]) {
            content.replaceChild(contact(), content.children[1]);
        }
    }
}

const setActive = (node) => {
    const active = document.querySelector('.active');
    active.classList.remove('active');
    node.classList.add('active');
};

const displayPage = (() => {
    const content = document.getElementById('content');
    content.appendChild(headerElement());
    content.appendChild(home());
    content.appendChild(footerElement());
})();