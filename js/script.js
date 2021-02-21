
{
    const titleClickHandler = function (event) {
    event.preventDefault();
    let articleSelector = 'href';
    const clickedElement = this;
    console.log('Link was clicked!');
    console.log(event);


    /* [DONE] remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');

    for (let activeLink of activeLinks) {
        activeLink.classList.remove('active');
      }

    /* [DONE] add class 'active' to the clicked link */
    this.classList.add('active');
    console.log('clickedElement:', clickedElement);

    /* [DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.posts .active');

    for (let activeArticle of activeArticles) {
        activeArticle.classList.remove('active');
    }

    /* [DONE] get 'href' attribute from the clicked link */

    document.getElementById('article-1');
    articleSelector = clickedElement.getAttribute('href');
    console.log('Link was clicked', articleSelector);

    /* find the correct article using the selector (value of 'href' attribute) */

    const targetArticle = document.querySelector(articleSelector);
    console.log(targetArticle);

    /* add class 'active' to the correct article */

    targetArticle.classList.add('active');
  };

  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';

  function generateTitleLinks() {
    console.log('generateTitleLinks');


    /* remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';

    /* for each article */

    const articles = document.querySelectorAll(optArticleSelector);

    for (let article of articles) {
        console.log(article);

        /* get the article id */
        const articleId = article.getAttribute('id');
        console.log(articleId);
        console.log('Link was clicked', articleId);

        /* find the title element */

        /* get the title from the title element */
        const articleTitle = article.querySelector(optTitleSelector).innerHTML;


        /* create HTML of the link */
        const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
        console.log(linkHTML);

        /* insert link into titleList */
        titleList.innerHTML = titleList.innerHTML + linkHTML;

    }
  }
  generateTitleLinks();
    const links = document.querySelectorAll('.titles a');

    for (let link of links) {
        link.addEventListener('click', titleClickHandler);
        console.log(links);
    }


}