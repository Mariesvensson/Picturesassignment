let imgSerchButton = document.querySelector('#menu');
let imgSection = document.querySelector('#img')

imgSerchButton.onsubmit = async event => {
   event.preventDefault();

   imgSection.innerHTML = '';

   let imgCount = 0;

   let input = imgSerchButton.input.value;
   let color = imgSerchButton.colors.value;
   let url = 'https://pixabay.com/api/?key=33474684-1ead600a61d07e2bdfb2e093e&q=' + input + '&colors=' + color

   let response = await fetch(url);
   let json = await response.json();

   console.log(json);

   if (pageNumber = 1){
      document.getElementById('previousPageButton').style.visibility = 'hidden';
   }

   for (let imgrespons of json.hits) {
      var imgelement = document.createElement('img');
      var divelemnt = document.createElement('div');
      var p = document.createElement('p');
      var pTags = document.createElement('p');

      divelemnt.classList.add('imgcontainer');
      imgelement.classList.add('styleimg')

      imgelement.src = imgrespons.webformatURL;
      p.innerText = imgrespons.user;
      pTags.innerText = imgrespons.tags

      divelemnt.appendChild(imgelement);
      divelemnt.appendChild(p);
      divelemnt.appendChild(pTags);
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

   if (pageNumber != 1){
      document.getElementById('previousPageButton').style.visibility = 'visible';
   }

   for (let imgrespons of json.hits) {
      var imgelement = document.createElement('img');
      var divelemnt = document.createElement('div');
      var p = document.createElement('p');
      var pTags = document.createElement('p');

      divelemnt.classList.add('imgcontainer');
      imgelement.classList.add('styleimg')

      imgelement.src = imgrespons.webformatURL;
      p.innerText = imgrespons.user;
      pTags.innerText = imgrespons.tags;

      divelemnt.appendChild(imgelement);
      divelemnt.appendChild(p);
      divelemnt.appendChild(pTags);
      imgSection.appendChild(divelemnt);

      imgCount++;

      if (imgCount == 10) {
         break;
      }
   }

   if(imgCount < 10){
      document.getElementById('nextPageButton').style.visibility = 'hidden';
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

   if (pageNumber != 1){
      document.getElementById('previousPageButton').style.visibility = 'visible';
      document.getElementById('nextPageButton').style.visibility = 'visible';
   }
   else {
      document.getElementById('previousPageButton').style.visibility = 'hidden';
      document.getElementById('nextPageButton').style.visibility = 'visible';
   }

   for (let imgrespons of json.hits) {

      var imgelement = document.createElement('img');
      var divelemnt = document.createElement('div');
      var p = document.createElement('p');
      var pTags = document.createElement('p');

      divelemnt.classList.add('imgcontainer');
      imgelement.classList.add('styleimg')

      imgelement.src = imgrespons.webformatURL;
      p.innerText = imgrespons.user;
      pTags.innerText = imgrespons.tags;

      divelemnt.appendChild(imgelement);
      divelemnt.appendChild(p);
      divelemnt.appendChild(pTags);
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