const get_api_res_btn = document.getElementById('get_api_res_btn');
get_api_res_btn.addEventListener('click', getAPI);

const title = document.getElementById('title');
const year = document.getElementById('year');
const director = document.getElementById('director');

let endPoint = "http://www.omdbapi.com/?apikey=cb54edf8&t=";

    function getAPI(){
        fetch(endPoint + document.getElementById('search').value, {
		method: 'GET'
	})
    .then(res => res.json())
    .then(data=> {
        title.innerHTML="Title:" + data.Title;
        year.innerHTML="Year:" + data.Year;
        director.innerHTML="Director:" + data.Director;
    });
}