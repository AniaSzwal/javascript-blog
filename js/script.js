/*document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
}); */


const titleClickHandler = function(event){
    event.preventDefault();
    let articleSelector = 'href';
    const clickedElement = this;
    console.log('Link was clicked!');
    console.log(event)

    

    /* [DONE] remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks){
        activeLink.classList.remove('active');
    }

    /* [DONE] add class 'active' to the clicked link */
    this.classList.add('active')
    console.log('clickedElement:', clickedElement);

    /* [DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.posts .active');

    for(let activeArticle of activeArticles){
        activeArticle.classList.remove('active');
    }

    /* [DONE] get 'href' attribute from the clicked link */

        document.getElementById("article-1");
        articleSelector = clickedElement.getAttribute("href");
        console.log ('Link was clicked', articleSelector)

    /* find the correct article using the selector (value of 'href' attribute) */

    const targetArticle = document.querySelector('href');
    console.log(targetArticle);

    /* add class 'active' to the correct article */
}

const links = document.querySelectorAll('.titles a');

for(let link of links){
    link.addEventListener('click', titleClickHandler);
}
