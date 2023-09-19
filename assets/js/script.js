// const settings = {
// 	async: true,
// 	crossDomain: true,
// 	url: 'https://horoscope-astrology.p.rapidapi.com/sign?s=taurus',
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'a10b03162cmsha7b7813609a7183p18be28jsn6f15f3cf9042',
// 		'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
// 	}
// };

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });

// const settings = {
// 	async: true,
// 	crossDomain: true,
// 	url: 'https://horoscope-astrology.p.rapidapi.com/horoscope?day=week&sunsign=libra',
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'a10b03162cmsha7b7813609a7183p18be28jsn6f15f3cf9042',
// 		'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
// 	}
// };

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });

const userInput = document.querySelector("#userInput");
const apiDisplay = document.querySelector("#api-result");
const horoscopeResult = document.querySelector("#display");


const settings = {
	async: true,
	crossDomain: true,
	url: 'https://horoscope-astrology.p.rapidapi.com/dailyphrase',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4a562791d8msh9b0c56728383034p1b1e0djsn0aa015a10bfb',
		'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});



const url5 = 'https://fortune-cookie4.p.rapidapi.com/';
const apiKey2 = '4a562791d8msh9b0c56728383034p1b1e0djsn0aa015a10bfb';
const option1 = {
	method: 'Get',
	headers: {
		'X-RapidAPI-Key': '4a562791d8msh9b0c56728383034p1b1e0djsn0aa015a10bfb',
		'X-RapidAPI-Host': 'fortune-cookie4.p.rapidapi.com'
	  }
}

fetch(url5, option1)
	.then(function(response) {
		return response.json()
	})
	.then(function(data){
		console.log(data);
	})




function inputAPI(answer) {
	
	
	const url = `https://horoscope-astrology.p.rapidapi.com/horoscope?day=week&sunsign=${answer}`;
	const apiKey = '4a562791d8msh9b0c56728383034p1b1e0djsn0aa015a10bfb';  // Replace with your actual API key

	fetch(url, {
		method: 'GET',
		headers: {
		'X-RapidAPI-Key': apiKey,
		'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
		}
	})
	.then(response => {
		if (!response.ok) {
		throw new Error('Network response was not ok');
		}
		return response.json(); // Parse the response JSON
	})
	.then(data => {
		console.log(data);
		displayingResult(data); // Log the data to the console
	})
	.catch(error => {
		console.log("Error:", error); // Log any errors
	});
}


function displayingResult(apiResult) {
	userInput.style.display = "none"
	horoscopeResult.innerHTML = ""
	const resultTemplate = apiDisplay.content.cloneNode(true);
	const title = resultTemplate.querySelector(".selected-sign");
	title.textContent = apiResult.sunsign;

	const weeklyH = resultTemplate.querySelector(".weekly-horoscope");
	weeklyH.textContent = apiResult.horoscope;
	console.log(resultTemplate);
	horoscopeResult.append(resultTemplate);
}


userInput.addEventListener("submit",function(e) {
	e.preventDefault();
	const answer = new FormData(userInput).get("answers")
	inputAPI(answer);
})