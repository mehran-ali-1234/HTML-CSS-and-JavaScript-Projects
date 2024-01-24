const toggleButton=document.querySelector('.btn');
const articleContainer=document.querySelector('.articles');
toggleButton.addEventListener('click',()=>{
      document.documentElement.classList.toggle('dark-theme');
})

const articlesData = articles.map((article)=>{
console.log(article);
const {title:mytitle,snippet,date,length}=article;
const formatDate= moment(date).format('MMMM Do,YYYY')
return `<article class="post">
        <h2>${mytitle}</h2>
        <div class="post-info">
        <span>${formatDate}</span>
        <span>${length} min read</span>

        </div>
        <p>${snippet}</p>
     </article>`
})
articleContainer.innerHTML=articlesData;