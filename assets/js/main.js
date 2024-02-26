// Test if script is connected to index.html
console.log("fish");

const apiKey = "f1c700c2664c4950b113e04d95b6dddf";
const output = document.querySelector(".output");
const btn = document.querySelector(".find");

// eventlistener for form button

btn.addEventListener("click", () => {
    output.innerHTML = "";
    const keyword = document.querySelector(".input").value;
    const sortBy = document.querySelector(".sort").value;
    const language = document.querySelector(".language").value;
    const url = `https://newsapi.org/v2/everything?q=${keyword}&sortBy${sortBy}&language=${language}&apiKey=${apiKey}`;
    news(url);
});

// fetch news function

const news = (url) => {
    fetch(url)
        .then((res) => res.json())
        .then((news) => {
            news.articles.forEach((element) => {
                output.innerHTML += `
            <div class="tile">
            <h2>${element.title}</h2>
            <p class="smallParagraph">${element.author}</p>
            <img src="${element.urlToImage}">
            <p>${element.description}</p>

            <a href="${element.url}">Go to article</a>

            </div>
            `;
            });
        })
        .catch((error) => console.log(error));
};

// Startseite
news(`https://newsapi.org/v2/everything?q=nothing&language=en&apiKey=f1c700c2664c4950b113e04d95b6dddf`);
