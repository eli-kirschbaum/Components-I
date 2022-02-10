import './index.less'
import './components/article/article.js'
import './components/menu/menu.js'

function articleMaker(articleObj) {
    const article = document.createElement('div');
    const articleTitle = document.createElement('h2');
    const articleDate = document.createElement('p');
    const pOne = document.createElement('p');
    const pTwo = document.createElement('p');
    const pThree = document.createElement('p');
    const expandButton = document.createElement('span');
    
    article.appendChild(articleTitle);
    article.apppendChild(articleDate);
    article.apppendChild(pOne);
    article.apppendChild(pTwo);
    article.apppendChild(pThree);
    article.apppendChild(expandButton);
    
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