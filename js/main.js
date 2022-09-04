const key = '46ad7457603b9b0104e633e78cd60e16'
const loadData = city =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => dispWeather(data))
}
const dispWeather = data =>{
    setTextById('city', data.name);
    setTextById('temp', data.main.temp);
    setTextById('situation', data.weather[0].main);
}
const setTextById = (id, text) =>{
    const element = document.getElementById(id);
    element.innerText = text
}
const search = ()=>{
    const searchField = document.getElementById('search-field');
    const searchValue =searchField.value;
    loadData(searchValue);
}
document.getElementById('search-field').addEventListener('keypress', function(event){
    if(event.key === "Enter"){
        search();
    }
})
document.getElementById('search-btn').addEventListener('click', function(){
    search();
})
// loadData('dhaka')