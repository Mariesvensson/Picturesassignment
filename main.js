let imgSerchButton = document.querySelector('#menu');
let imgSection = document.querySelector('#img')

let imgCount = 0;



imgSerchButton.onsubmit = async event => {

   event.preventDefault();

   imgSection.innerHTML = '';

   let input = imgSerchButton.input.value;
   let color = imgSerchButton.colors.value;


   let url = 'https://pixabay.com/api/?key=33474684-1ead600a61d07e2bdfb2e093e&q=' + input + '&colors=' + color

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


      divelemnt.appendChild(imgelement);
      divelemnt.appendChild(p);
      imgSection.appendChild(divelemnt);

      imgCount++;


      if (imgCount == 10) {

         break;
      }

   }



}

let nextPage = document.querySelector('#nextPage')


let pageNumber = 1;

nextPage.onsubmit = async event => {

   
   event.preventDefault();

   removeElement();

   let input = imgSerchButton.input.value;
   let color = imgSerchButton.colors.value;

   pageNumber++

   imgCount = 0;

   let url = 'https://pixabay.com/api/?key=33474684-1ead600a61d07e2bdfb2e093e&q=' + input + '&colors=' + color + '&page=' + pageNumber 

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


      divelemnt.appendChild(imgelement);
      divelemnt.appendChild(p);
      imgSection.appendChild(divelemnt);

      imgCount++;


      if (imgCount == 10) {

         break;
      }

   }

}

let previousPage = document.querySelector('#previousPage')


previousPage.onsubmit = async event => {

   
   event.preventDefault();

   removeElement();

   let input = imgSerchButton.input.value;
   let color = imgSerchButton.colors.value;

   pageNumber--

   imgCount = 0;

   let url = 'https://pixabay.com/api/?key=33474684-1ead600a61d07e2bdfb2e093e&q=' + input + '&colors=' + color + '&page=' + pageNumber 

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


      divelemnt.appendChild(imgelement);
      divelemnt.appendChild(p);
      imgSection.appendChild(divelemnt);

      imgCount++;


      if (imgCount == 10) {

         break;
      }

   }

}

function removeElement(){

   let divelementToRemove = document.querySelectorAll('.imgcontainer')

   divelementToRemove.forEach(divElement => {

      divElement.remove();
   });


}