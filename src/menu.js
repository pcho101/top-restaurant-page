const menu = () => {
    const main = document.createElement('main');
    const h1 = document.createElement('h1');
    h1.classList.add('menu');
    h1.textContent = 'Menu';
    
    const h2 = document.createElement('h2');
    h2.classList.add('featured');
    h2.textContent = 'Featured Dishes';

    main.appendChild(h1);
    main.appendChild(h2);

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');
    
    menuContainer.appendChild(buildMenu(shrimpDumpling));
    menuContainer.appendChild(buildMenu(xiaoLongBao));
    menuContainer.appendChild(buildMenu(porkDumpling));
    menuContainer.appendChild(buildMenu(lotusLeafRice));
    menuContainer.appendChild(buildMenu(eggTart));
    menuContainer.appendChild(buildMenu(sesameBalls));
    main.appendChild(menuContainer);

    return main;
}

const Course = (title, text, source, id) => {
    return {title, text, source, id}
};

const shrimpDumpling = Course('Shrimp Dumpling', 'Shrimp wrapped with translucent wrapper', 'shrimp-dumpling.jpg', 'shrimp-dumpling');
const xiaoLongBao = Course('Xiao Long Bao', 'Steamed soup dumplings filled with pork and broth', 'xiaolongbao.jpg', 'xiaolongbao');
const porkDumpling = Course('Pork Dumpling', 'Dumpling with pork, shrimp and mushroom', 'pork-dumpling.jpg', 'pork-dumpling');
const lotusLeafRice = Course('Lotus Leaf Rice', 'Sticky rice wrapped in lotus leaf', 'lotus-leaf-rice.jpg', 'lotus-leaf-rice');
const eggTart = Course('Egg Tart', 'Custard tart with egg', 'egg-tart.jpg', 'egg-tart');
const sesameBalls = Course('Sesame Balls', 'Deep fried dough filled with sweet paste', 'sesame-balls.jpg', 'sesame-balls');

// const shrimpDumpling = Course('Shrimp Dumpling', 'Shrimp wrapped with translucent wrapper', 'shriming.jpg', 'shrimp-dumpling');
// const xiaoLongBao = Course('Xiao Long Bao', 'Steamed soup dumplings filled with pork and broth', 'xiaolao.jpg', 'xiaolongbao');
// const porkDumpling = Course('Pork Dumpling', 'Dumpling with pork, shrimp and mushroom', 'pork-ng.jpg', 'pork-dumpling');
// const lotusLeafRice = Course('Lotus Leaf Rice', 'Sticky rice wrapped in lotus leaf', 'lotus-lece.jpg', 'lotus-leaf-rice');
// const eggTart = Course('Egg Tart', 'Custard tart with egg', 'egg-tt.jpg', 'egg-tart');
// const sesameBalls = Course('Sesame Balls', 'Deep fried dough filled with sweet paste', 'sesae-e.jpg', 'sesame-balls');

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