{
  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles',
    optArticleAuthorSelector = '.post-author',
    optArticleTagsSelector = `.post-tags .list`;
    optTagsListSelector ='.tags.list';

  const titleClickHandler = function (event) {
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');
    console.log(MouseEvent + '.');


    const activeLinks = document.querySelectorAll('.titles a.active');

    for (let activeLink of activeLinks) {
      activeLink.classList.remove('active');
    }

    console.log('clickedElement', clickedElement);
    clickedElement.classList.add('active');

    const activeArticles = document.querySelectorAll('.posts .active');

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
    console.log(optArticleSelector);
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

    const links = document.querySelectorAll('.titles a');
    console.log(links);
    for (let link of links) {
      link.addEventListener('click', titleClickHandler);
    }
  }

  generateTitleLinks();


  //generateTags

  function generateTags() {

      /* create a new variable allTags with an empty array */
      let allTags = [];

      /* find all articles */
      const articles = document.querySelectorAll(optArticleSelector);

      /* START LOOP: for every article: */
      for (let article of articles) {

          /* find tags wrapper */
          const tagsWrapperList = article.querySelector(optArticleTagsSelector);

          /* make html variable with empty string */
          let html = '';

          /* get tags from data-tags attribute */
          const articleTags = article.getAttribute('data-tags');
          console.log(articleTags);

          /* split tags into array */
          const articleTagsArray = articleTags.split(' ');
          console.log(articleTagsArray);

          /* START LOOP: for each tag */
          for (let tag of articleTagsArray) {

              /* generate HTML of the link */
              const linkHTML = '<li><a href="#tag-' + tag + '"><span>' + tag + '</span></a></li>';
              console.log(linkHTML);

              /* add generated code to html variable */
              tagsWrapperList.innerHTML = tagsWrapperList.innerHTML + linkHTML;
              html = html + linkHTML;

              /* [NEW] check if this link is NOT already in allTags */
              if (allTags.indexOf(linkHTML) == -1) {
                  /* [NEW] add generated code to allTags array */
                  allTags.push(linkHTML);
              }    /* END LOOP: for each tag */

              /* insert HTML of all the links into the tags wrapper */
              tagsWrapperList.innerHTML = html;

          } /* END LOOP: for every article: */

          /* [NEW] find list of tags in right column */
          const tagList = document.querySelector('.tags');

          /* [NEW] add html from allTags to tagList */
          tagList.innerHTML = allTags.join(' ');
      }
  }
  generateTags();


  // tagClickHandler

  function tagClickHandler(event) {

    /* prevent default action for this event */
    event.preventDefault();

    /* make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;
    console.log('Tag was clicked');
    console.log(MouseEvent + '.');

    /* make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');
    console.log(href);

    /* make a new constant "tag" and extract tag from the "href" constant */
    const tag = href.replace('#tag-', '');
    console.log(tag);

    /* find all tag links with class active */
    const activeTagLinks = document.querySelectorAll('a.active[href^="#tag-"]');
    console.log(activeTagLinks);

    /* START LOOP: for each active tag link */
    for (let activeTagLink of activeTagLinks) {

      /* remove class active */
      activeTagLink.classList.remove('active');

    }  /* END LOOP: for each active tag link */

    /* find all tag links with "href" attribute equal to the "href" constant */
    const targetTagLinks = document.querySelectorAll('a[href="' + href + '"]');
    console.log(targetTagLinks);

    /* START LOOP: for each found tag link */
    for (let targetTagLink of targetTagLinks) {

      /* add class active */
      targetTagLink.classList.add('active');

    }  /* END LOOP: for each found tag link */

    /* execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks('[data-tags~="' + tag + '"]');
  }

  function addClickListenersToTags() {
    const tags = document.querySelectorAll('a[href^="#tag-"]');

    for (let tag of tags) {
      tag.addEventListener('click', tagClickHandler);
    }
  }
  addClickListenersToTags();


  function generateAuthors() {
    const articles = document.querySelectorAll(optArticleSelector);

    for (let article of articles) {

      const authorsWrapperList = article.querySelector(optArticleAuthorSelector);

      let html = '';

      const articleAuthor = article.getAttribute('data-author');
      console.log(articleAuthor);

      const linkHTML = '<li><a href="#author-' + articleAuthor + '"><span>' + articleAuthor + '</span></a></li>';
      console.log(linkHTML);

      authorsWrapperList.innerHTML = authorsWrapperList.innerHTML + linkHTML;
      html = html + linkHTML;

      authorsWrapperList.innerHTML = html;

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
    document.querySelectorAll('a[href="' + href + '"]');
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