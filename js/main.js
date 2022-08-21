
const icons = {
    Clear: '☀',
    Rain: '️🌧',
    Storm: '⛈',
    Snow: '🌨',
    Mist: '🌫',
    Clouds: '☁',
};

// Image
$('.container').append(`<img src="" />`);
$('.container').append(`<div class="image-container"></div>`);
axios({
    method: 'GET',
    url: 'https://api.unsplash.com/photos/random/?client_id=VxCBFV1d5zOWTLlp-Yq8Md4Oc-FCTv7zy_waSAsx9pQ',
})
.then(response => {
    $(".container").css("background-image", `url('${response.data.urls.full}')`);
    $(".container").css("background-repeat", `repeat`);
    $(".container").css("background-size", `cover`);
})
.catch(error => {
    console.log(error)
})

// Weather
axios({
    method: 'GET',
    url: 'https://api.openweathermap.org/data/2.5/weather?lat=51.435989&lon=-0.516430&appid=32ef58d0849d53fc08fe1d59a68f30b8',
})
.then(response => {
let temp = Math.round(response.data.main.temp - 273.15)

$('.container').append(`<p class="temp">${icons[response.data.weather[0].main]} ${temp} °C</p>`)
$('.container').append(`<p class="location">${response.data.name}</p>`)

})
.catch(error => {
    console.log(error)
})

// Quote
axios({
    method: 'GET',
    url: 'https://api.forismatic.com/api/1.0/get?method=getQuote&format=json&lang=en',
})
.then(response => {
    // console.log(response.data.quoteText, "hello")
    $('.container').append(`<div class="quote"><div class="text">${response.data.quoteText}</div></div>`)
})
.catch(error => {
    console.log(error)
})

// // Time
$('.container').append(`<div class="time-container"><div id="time">${moment().format('LTS')}</div></div>`)

var formatted = moment().format('HH')
const messageTag = document.getElementById('message');

if (formatted > 18 && formatted < 22){
    messageTag.innerHTML = "Good Evening"
} else if (formatted > 13 && formatted < 18) {
    messageTag.innerHTML = "Good Afternoon"
} else if (formatted > 12 && formatted < 13) {
    messageTag.innerHTML = "It's Lunchtime"
} else if (formatted > 1 && formatted < 12) {
    messageTag.innerHTML = "Good Morning"

}