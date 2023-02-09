let content = document.getElementById("content")
let navMenu = document.getElementById('nav_menu')
let button = document.getElementById("button")

let business = document.getElementById("business")
let entartainment = document.getElementById("entartainment")
let general = document.getElementById("general")
let health = document.getElementById("health")
let science = document.getElementById("science")
let sports = document.getElementById("sports")
let technology = document.getElementById("technology")
let countryCode = document.getElementById("country_code")

countryCode.addEventListener("click", () => {
    let name = countryCode.value;
    getNews("general", name)
})

business.addEventListener("click", () => {
    let name = countryCode.value;
    getNews("business", name)
})

entartainment.addEventListener("click", () => {
    let name = countryCode.value;
    getNews("entertainment", name)
})

general.addEventListener("click", () => {
    let name = countryCode.value;
    getNews("general", name)
})

health.addEventListener("click", () => {
    let name = countryCode.value;
    getNews("health", name)
})
science.addEventListener("click", () => {
    let name = countryCode.value;
    getNews("science", name)
})
sports.addEventListener("click", () => {
    let name = countryCode.value;
    getNews("sports", name)
})
technology.addEventListener("click", () => {
    let name = countryCode.value;
    getNews("technology", name)
})
async function getNews(category, country) {
    let res = await fetch(`https://saurav.tech/NewsAPI/top-headlines/category/${category}/${country}.json`)
    let jsonData = await res.json()
    console.log(jsonData)
    let data = await jsonData.articles;
            let html = ""
            for(let i = 0; i< 20;i++){
                html += ` <div class="news_card"> <img src="${data[i].urlToImage}"> <div class="news_text"> <span class="title"> ${data[i].title} </span> 
                <span class="author"> <b>source:</b> ${data[i].source.name} / ${data[i].publishedAt}</span> 
                <div class="lower_text"><span class="description"> ${data[i].description} </span><span class="read_more"> Read more at <a href="${data[i].url}" target="_blank"> ${data[i].source.name}</a> </span></div></div>
                </div>`
            }
            content.innerHTML = html
}
getNews("general", "in")

// getNews("", "in")

// function getNews(category, country) {
//     fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=cc73112990714b88bd5e117f15741e16`)
//         .then((res) => res.json())
//         .then((data) => {

//             let array = data.articles
//             let articles = array
//             let html = ""
//             articles.forEach(element => {
//                 html += ` <div class="news_card"> <img src="${element.urlToImage}"> <div class="news_text"> <span class="title"> ${element.title} </span> 
//             <span class="author"> <b>source:</b> ${element.source.name} / ${element.publishedAt}</span> 
//             <div class="lower_text"><span class="description"> ${element.description} </span><span class="read_more"> Read more at <a href="${element.url}" target="_blank"> ${element.source.name}</a> </span></div></div>
//             </div>`
//             });
//             content.innerHTML = html
//         })
// }
let deleteMenu = document.getElementById("header_menu")

button.addEventListener("click", () => {
    navMenu.style.display = "flex"
})
deleteMenu.addEventListener("mouseup", () => {
    navMenu.style.display = "none"
})


let nightmode = document.getElementById('night_mode')

nightmode.addEventListener("click", () => {
    document.body.classList.toggle("dark_mode")
    if (document.body.classList.contains("dark_mode")) {
        nightmode.innerHTML = `<i class="fa fa-sun-o"></i>`
    } else {
        nightmode.innerHTML = `<i class="fa fa-moon-o"></i>`
    }
})