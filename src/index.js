import {home} from './home';
import {menu} from './menu';
import {contact} from './contact';

const headerItems = ['Home', 'Menu', 'Contact'];

const headerElement = () => {
    const header = document.createElement('header');
    const ul = document.createElement('ul');
    header.appendChild(ul);
    for (let i = 0; i < headerItems.length; i++) {
        const li = document.createElement('li');
        li.textContent = headerItems[i];
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

const switchTabs = (() => {
    document.querySelectorAll('li').forEach(node => {
        node.addEventListener('click', () => {
            const content = document.getElementById('content');
            if (node.textContent == headerItems[0]) {
                content.replaceChild(home(), content.children[1]);
            }
            else if (node.textContent == headerItems[1]) {
                content.replaceChild(menu(), content.children[1]);
            }
            else if (node.textContent == headerItems[2]) {
                content.replaceChild(contact(), content.children[1]);
            }
        });
    });
})();