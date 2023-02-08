let form = document.querySelector('#menu');
let list = document.querySelector('#images')

form.onsubmit = async event => {

event.preventDefault();

let input = form.input.value;
let color = form.colors.value;

let url = 'https://pixabay.com/api/?key=33474684-1ead600a61d07e2bdfb2e093e&q='+ color + '+' + input +'&image_type=photo'
let response = await fetch(url);
let json = await response.json();

for (i=0; i < json.hits.lenght; i++){

   let img = json.hits[i].pageURL

   let listItem = document.createElement('li')
  
   list.append(img)


}

}