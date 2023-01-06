class NewsService{
    getTopheadLines(){
        return fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=44ec1da83d194da5b80d7ce6fe0a4281")
    }
}

var service= new NewsService()
service.getTopheadLines().then(res=>res.json()).then(data=>populateAllArticles(data.articles))

function populateAllArticles(articles){
    console.log(articles);
    let htmlData=``
    for(let article of articles){
        htmlData+=`
        <div class="col-4">
                <div class="card" style="width: 18rem;">
                    <img src="${article.urlToImage}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${article.title}</h5>
                      <p class="card-text">${article.description}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">${article.author}</li>
                      <li class="list-group-item">${article.publishedAt}</li>
                      
                    </ul>
                    <div class="card-body">
                      <a href="${article.url}" class="card-link">see more</a>
                      
                    </div>
                  </div>
            </div>
        
        
        `
        result.innerHTML=htmlData
        // console.log(article.author);
        // console.log(article.title);
        // console.log(article.description);
        // console.log(article.publishedAt);
        // console.log("==================");
    }
}

