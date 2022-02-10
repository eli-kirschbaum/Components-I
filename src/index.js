import './index.less'
import './components/article/article.js'
import './components/menu/menu.js'
import { data } from 'msw/lib/types/context';



function articleMaker(articleObj) {
    const article = document.createElement('div');
    const articleTitle = document.createElement('h2');
    const articleDate = document.createElement('p');
    const pOne = document.createElement('p');
    const pTwo = document.createElement('p');
    const pThree = document.createElement('p');
    const expandButton = document.createElement('span');
    
    article.appendChild(articleTitle);
    article.appendChild(articleDate);
    article.appendChild(pOne);
    article.appendChild(pTwo);
    article.appendChild(pThree);
    article.appendChild(expandButton);
    
    article.classList.add('article');
    articleDate.classList.add('date');
    expandButton.classList.add('expandButton');

    articleTitle.textContent = articleObj.title;
    articleDate.textContent = articleObj.date;
    pOne.textContent = articleObj.firstParagraph;
    pTwo.textContent = articleObj.secondParagraph;
    pThree.textContent = articleObj.thirdParagraph;
    expandButton.textContent = '+';

    expandButton.addEventListener('click', event => {
        article.classList.toggle('article-open');
    });
    
    return article;
}

const articles = document.querySelector('.articles');

//const testArticle = articleMaker( {title: 'This is a Test', date: 'July 4th, 1776', firstParagraph: 'This Text.', secondParagraph: 'That Text.', thirdParagraph: 'Other Text'} );
//articles.append(testArticle);



data.forEach(articleObj => {
    const articleElem = articleMaker(articleObj);
    articles.appendChild(articleElem);
});




function menuMaker(menuArray) {
    const menu = document.createElement('div');
    const list = document.createElement('ul');
    
    menu.appendChild(list);

    menu.classList.add('menu');

    menuArray.forEach(idx => {
        const menuItem = document.createElement('li');
        menuItem.textContent = idx;
        list.appendChild(menuItem);
    });

    const menuButton = document.querySelector('.menu-button');
    menuButton.addEventListener('click', event => {
        menu.classList.toggle('menu--open');
    });

    return menu;
}

const header = document.querySelector('.header');

const mainMenu = menuMaker(menuItems);

header.appendChild(mainMenu);
