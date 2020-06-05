const BASE_URL = "https://newsapi.org/v2";
const API_KEY = "d5b9f0e2e27f46c098d2016b1b335e84";
const newsBoard = document.getElementById("listaDeNoticias");
const filterTech = document.getElementById("tec");
const filterLatest = document.getElementById("ultimas");

async function getNewsArticles(category = '') {
    console.log(category);
    newsBoard.innerHTML = "";

    let response = await fetch(`${BASE_URL}/top-headlines?country=br&apiKey=${API_KEY}&category=${category}`);

    let dados = await response.json();
    console.log(dados);

    newsBoard.innerHTML = "";

    dados.articles.forEach( (news) => {
        newsBoard.innerHTML += `
        <div class="col-4">
        <div class="card"><img class="card-img-top"
            src="${news.urlToImage}">
          <div class="card-body">
            <h5 class="card-title">${news.title}</h5>
            <p class="card-text">${news.content}</p><a class="btn btn-primary"
              href=${news.url}>Ir
              para noticia</a>
          </div>
        </div>
      </div>
        `
    })

}


getNewsArticles();

filterTech.addEventListener('click', () => getNewsArticles('technology'));
filterLatest.addEventListener('click', () => getNewsArticles());