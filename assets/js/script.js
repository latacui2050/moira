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

const settings = {
	async: true,
	crossDomain: true,
	url: 'https://horoscope-astrology.p.rapidapi.com/horoscope?day=week&sunsign=libra',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a10b03162cmsha7b7813609a7183p18be28jsn6f15f3cf9042',
		'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});