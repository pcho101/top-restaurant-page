import Dish1 from './images/shrimp-dumpling.jpg';
import Dish2 from './images/xiaolongbao.jpg';
import Dish3 from './images/pork-dumpling.jpg';
import Dish4 from './images/lotus-leaf-rice.jpg';
import Dish5 from './images/egg-tart.jpg';
import Dish6 from './images/sesame-balls.jpg';

const menu = () => {
    const main = document.createElement('main');
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2');
    const menuContainer = document.createElement('div');

    h1.textContent = 'Menu';
    h2.textContent = 'Featured Dishes';
    
    h1.classList.add('menu');
    h2.classList.add('featured');
    menuContainer.classList.add('menu-container');
    
    menuContainer.appendChild(buildMenu(shrimpDumpling));
    menuContainer.appendChild(buildMenu(xiaoLongBao));
    menuContainer.appendChild(buildMenu(porkDumpling));
    menuContainer.appendChild(buildMenu(lotusLeafRice));
    menuContainer.appendChild(buildMenu(eggTart));
    menuContainer.appendChild(buildMenu(sesameBalls));

    main.appendChild(h1);
    main.appendChild(h2);
    main.appendChild(menuContainer);

    return main;
}

const Course = (source, title, text, id) => {
    return {source, title, text, id}
};

const shrimpDumpling = Course(
    Dish1,
    'Shrimp Dumpling',
    'Shrimp wrapped with translucent wrapper',
    'shrimp-dumpling'
    );
const xiaoLongBao = Course(
    Dish2,
    'Xiao Long Bao',
    'Steamed soup dumplings with pork and broth',
    'xiaolongbao'
    );
const porkDumpling = Course(
    Dish3,
    'Pork Dumpling',
    'Dumpling with pork, shrimp and mushroom',
    'pork-dumpling'
    );
const lotusLeafRice = Course(
    Dish4,
    'Lotus Leaf Rice',
    'Sticky rice wrapped in lotus leaf',
    'lotus-leaf-rice'
    );
const eggTart = Course(
    Dish5,
    'Egg Tart',
    'Custard tart with egg',
    'egg-tart'
    );
const sesameBalls = Course(
    Dish6,
    'Sesame Balls',
    'Deep fried dough filled with sweet paste',
    'sesame-balls'
    );

const buildMenu = (Course) => {
    const dish = document.createElement('div');
    const dishTitle = document.createElement('h3');
    const dishDesc = document.createElement('p');
    const dishImage = document.createElement('img');
    
    dishImage.src = Course.source;
    dishImage.alt = Course.id;
    dishImage.id = Course.id;
    
    dishTitle.textContent = Course.title;
    dishDesc.textContent = Course.text;

    dish.classList.add('dish');
    dish.appendChild(dishTitle);
    dish.appendChild(dishDesc);
    dish.appendChild(dishImage);

    return dish;
}

export {menu};