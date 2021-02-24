{
  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles',
    optArticleAuthorSelector = '.post-author',
    optArticleTagsSelector = `.post-tags .list`;

  const titleClickHandler = function (event) {
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');
    console.log(MouseEvent + '.');


    const activeLinks = document.querySelectorAll('.titles a.active');

    for (let activeLink of activeLinks) {
      activeLink.classList.remove('active');
    }

    console.log('clickedElement (with plus):', clickedElement);
    clickedElement.classList.add('active');

    const activeArticles = document.querySelectorAll('.posts article.active');

    for (let activeArticle of activeArticles) {
      activeArticle.classList.remove('active');
    }


    const articleSelector = clickedElement.getAttribute('href');
    console.log(articleSelector);


    const targetArticle = document.querySelector(articleSelector);
    console.log(targetArticle);
    targetArticle.classList.add('active');
  };


  //generateTitleLinks
  function generateTitleLinks(customSelector = '') {

    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';

    const articles = document.querySelectorAll(optArticleSelector + customSelector);
    console.log(articles);
    console.log(customSelector);

    let html = '';

    for (let article of articles) {

      const articleId = article.getAttribute('id');
      console.log(articleId);

      const articleTitle = article.querySelector(optTitleSelector).innerHTML;
      console.log(articleTitle);
      /* [DONE^]get the title from the title element */


      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
      console.log(linkHTML);


      /* insert link into titleList */
      titleList.innerHTML = titleList.innerHTML + linkHTML;
      html = html + linkHTML;
      titleList.innerHTML = html;

    }
  }

  generateTitleLinks();
  const links = document.querySelectorAll('.titles a');
  console.log(links);
  for (let link of links) {
    link.addEventListener('click', titleClickHandler);
  }

  //generateTags

  function generateTags() {

    const articles = document.querySelectorAll(optArticleSelector);

    for (let article of articles) {

      const tagsWrapperList = article.querySelector(optArticleTagsSelector);

      let html = '';

      const articleTags = article.getAttribute('data-tags');
      console.log(articleTags);

      const articleTagsArray = articleTags.split(' ');
      console.log(articleTagsArray);

      for (let tag of articleTagsArray) {

        const linkHTML = '<li><a href="#tag-' + tag + '"><span>' + tag + '</span></a></li>';
        console.log(linkHTML);

        tagsWrapperList.innerHTML = tagsWrapperList.innerHTML + linkHTML;
        html = html + linkHTML;

        tagsWrapperList.innerHTML = html;

      }
    }
  }

  generateTags();


  // tagClickHandler

  function tagClickHandler(event) {
      event.preventDefault();
      const clickedElement = this;
      console.log('Tag was clicked');
      console.log(MouseEvent + '.');


      const href = clickedElement.getAttribute('href');
      console.log(href);

      const tag = href.replace('#tag-', '');
      console.log(tag);

      const activeTagLinks = document.querySelectorAll('a.active[href^="#tag-"]');
      console.log(activeTagLinks);

      for (let activeTagLink of activeTagLinks) {

          activeTagLink.classList.remove('active');
      }

      const targetTagLinks = document.querySelectorAll('a[href="' + href + '"]');
      console.log(targetTagLinks);

      for (let targetTagLink of targetTagLinks) {

          targetTagLink.classList.add('active');
      }

      generateTitleLinks('[data-tags~="' + tag + '"]');
  }
    tagClickHandler();

    function addClickListenersToTags() {
      const href = this.getAttribute('href');
      console.log(href);

      const targetTagLinks = document.querySelectorAll('a[href="' + href + '"]');
      console.log(targetTagLinks);

      for (let targetTagLink of targetTagLinks) {

        targetTagLink.addEventListener('click', tagClickHandler);
        tagClickHandler();

      }
    }

    addClickListenersToTags();

    function generateAuthors() {
      const articles = document.querySelectorAll(optArticleSelector);

      for (let article of articles) {
        const tagsWrapperList = article.querySelector(optArticleAuthorSelector);

        let html = '';

        const articleAuthor = article.getAttribute('data-author');
        console.log(articleAuthor);

        const articleAuthorArray = articleAuthor.split(' ');
        console.log(articleAuthorArray);

        for (let author of articleAuthorArray) {

          const linkHTML = '<li><a href="#author-' + author + '"><span>' + author + '</span></a></li>';
          console.log(linkHTML);

          tagsWrapperList.innerHTML = tagsWrapperList.innerHTML + linkHTML;
          html = html + linkHTML;

          tagsWrapperList.innerHTML = html;
        }
      }
    }

    generateAuthors();

    function authorClickHandler(event) {
      event.preventDefault();
      const clickedElement = this,
        href = clickedElement.getAttribute('href'),
        author = href.replace('#author-', ''),
        activeAuthors = document.querySelectorAll('a.active[href^="#author-"]');

      for (let activeAuthor of activeAuthors) {
        activeAuthor.classList.remove('active');
      }
      const clickedAuthors = document.querySelectorAll('a[href="' + href + '"]');

      for (let clickedAuthor of clickedAuthors) {
        clickedAuthor.classList.add('active');
      }
      generateTitleLinks('[data-author="' + author + '"]');
    }

    function addClickListenersToAuthors() {
      const authors = document.querySelectorAll('a[href^="#author-"]');

      for (let author of authors) {
        author.addEventListener('click', authorClickHandler);
      }
    }

    addClickListenersToAuthors();


}
