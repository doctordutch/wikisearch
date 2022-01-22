// variables
const input = document.querySelector('.main-search');
const searchBtn = document.querySelector('.main-btn');

// events
searchBtn.addEventListener('click', searchWiki);

// functions
// search wiki
function searchWiki(event) {
 event.preventDefault();
 let searchValue = input.value;

 const origin = "https://en.wikipedia.org";
 const url = `${origin}/w/api.php?action=query&origin=*&format=json&list=search&srsearch=${searchValue}&srlimit=5`

 fetch(url).then(function (data) {
  return data.json()
  

 }).then(displayData).catch(function (error) {
  console.log(error);

 })

}
// display Data

function displayData(data) {
 let result = data.query.search;
 console.log(result);
 let output = '';
 result.forEach(function (item) {
  output += `<li class="search-item">
    <h2 class="search-item__title">${item.title}</h2>
    <p class="search-item__text">${item.snippet}</p>
    <a href="http://en.wikipedia.org/?curid=${item.pageid}" class="search-item__link main-btn" target="_blank">read more ...</a>
   </li>`
 })
 document.querySelector('.results').innerHTML = output;

}