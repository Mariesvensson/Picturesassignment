let form = document.querySelector('#menu');
let imgonpage = document.querySelector('#img')

form.onsubmit = async event => {

   event.preventDefault();

   imgonpage.innerHTML = '';

   let input = form.input.value;
   let color = form.colors.value;

   let url = 'https://pixabay.com/api/?key=33474684-1ead600a61d07e2bdfb2e093e&q=' + input + '&colors=$' + color + '&per_page=10'

   let response = await fetch(url);
   let json = await response.json();
   console.log(json);

   for (let imgrespons of json.hits) {

      var imgelement = document.createElement('img');
      var divelemnt = document.createElement('div');
      var p = document.createElement('p');

      divelemnt.classList.add('imgcontainer');
      imgelement.classList.add('styleimg')

      imgelement.src = imgrespons.webformatURL;

      p.innerText = imgrespons.user;

      divelemnt.appendChild(p);
      divelemnt.appendChild(imgelement);
      imgonpage.appendChild(divelemnt);
      


   }



}